// AWS S3 Configuration for Alka's CakeWalk
// This file contains the configuration for AWS S3 integration

export const AWS_CONFIG = {
  // Replace these with your actual AWS configuration
  region: 'us-east-1',
  bucketName: 'alkas-cakewalk-images',
  
  // Folder structure in S3 bucket
  folders: {
    gallery: 'gallery/',
    carousel: 'carousel/',
    products: 'products/',
    testimonials: 'testimonials/'
  },
  
  // CloudFront distribution URL (if using CloudFront)
  cloudFrontUrl: 'https://your-cloudfront-domain.cloudfront.net'
};

// Image categories mapping
export const IMAGE_CATEGORIES = {
  'custom-cakes': 'custom',
  'theme-cakes': 'theme',
  'cupcakes': 'cupcakes',
  'donuts': 'donuts'
};

// Helper function to construct S3 URLs
export const buildS3Url = (folder: string, filename: string): string => {
  const baseUrl = AWS_CONFIG.cloudFrontUrl || 
    `https://${AWS_CONFIG.bucketName}.s3.${AWS_CONFIG.region}.amazonaws.com`;
  
  return `${baseUrl}/${folder}${filename}`;
};

// Helper function to extract category from S3 key
export const getCategoryFromKey = (key: string): string => {
  const folder = key.split('/')[0];
  return IMAGE_CATEGORIES[folder as keyof typeof IMAGE_CATEGORIES] || 'other';
};

/*
S3 Bucket Structure:
alkas-cakewalk-images/
├── gallery/
│   ├── custom-cakes/
│   ├── theme-cakes/
│   ├── cupcakes/
│   └── donuts/
├── carousel/
├── products/
└── testimonials/

Instructions for setting up S3:
1. Create an S3 bucket named 'alkas-cakewalk-images'
2. Set up proper IAM permissions for public read access
3. Configure CORS policy for web access
4. Optionally set up CloudFront for better performance
5. Organize images in the folder structure above
6. Update the AWS_CONFIG with your actual values

CORS Policy Example:
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": []
  }
]

Bucket Policy Example (for public read access):
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::alkas-cakewalk-images/*"
    }
  ]
}
*/