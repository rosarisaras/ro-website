#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p images

# Download main profile image
echo "Downloading profile image..."
wget -O images/rosari-profile.png "https://img1.wsimg.com/isteam/ip/8a25ba46-0b0d-4842-a820-153e2102cf39/Rosari%20-06.png"

# Download favicon
echo "Downloading favicon..."
wget -O images/favicon.jpg "https://img1.wsimg.com/isteam/ip/8a25ba46-0b0d-4842-a820-153e2102cf39/favicon/87eda3be-878e-4f15-a5ee-9bed6a3cbf99.jpg"

echo "Images downloaded successfully!"

# Update the index.html to use local images
echo "Updating image paths in index.html..."
sed -i 's|https://img1.wsimg.com/isteam/ip/8a25ba46-0b0d-4842-a820-153e2102cf39/Rosari%20-06.png/:/cr=t:0%25,l:3.11%25,w:93.77%25,h:100%25/rs=w:600,h:800,cg:true|images/rosari-profile.png|g' index.html

echo "Done!"