import { useState, useEffect } from 'react';

// This hook will fetch images from S3 bucket
// You'll need to configure your S3 bucket and AWS credentials
export const useS3Images = (bucketName: string, prefix: string = '') => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        
        // Example S3 configuration - replace with your actual implementation
        // You would typically use AWS SDK or a custom API endpoint
        
        // For now, using placeholder URLs - replace with actual S3 integration
        const mockS3Images = [
          `https://your-s3-bucket.s3.amazonaws.com/${prefix}image1.jpg`,
          `https://your-s3-bucket.s3.amazonaws.com/${prefix}image2.jpg`,
          `https://your-s3-bucket.s3.amazonaws.com/${prefix}image3.jpg`,
        ];
        
        setImages(mockS3Images);
        setError(null);
      } catch (err) {
        setError('Failed to fetch images from S3');
        console.error('S3 fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [bucketName, prefix]);

  return { images, loading, error };
};

// Utility function to generate S3 URLs
export const generateS3Url = (bucketName: string, key: string, region: string = 'us-east-1') => {
  return `https://${bucketName}.s3.${region}.amazonaws.com/${key}`;
};

// Function to list objects in S3 bucket (requires backend implementation)
export const listS3Objects = async (bucketName: string, prefix: string = '') => {
  try {
    // This would typically call your backend API that uses AWS SDK
    const response = await fetch(`/api/s3/list?bucket=${bucketName}&prefix=${prefix}`);
    const data = await response.json();
    return data.objects || [];
  } catch (error) {
    console.error('Error listing S3 objects:', error);
    return [];
  }
};