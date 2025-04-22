const https = require('https');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

// List of bag images to download
const images = [
    {
        url: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
        name: 'bag1.jpg'
    },
    {
        url: 'https://images.pexels.com/photos/1152099/pexels-photo-1152099.jpeg',
        name: 'bag2.jpg'
    },
    {
        url: 'https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg',
        name: 'bag3.jpg'
    },
    {
        url: 'https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg',
        name: 'bag4.jpg'
    },
    {
        url: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg',
        name: 'bag5.jpg'
    },
    {
        url: 'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg',
        name: 'bag6.jpg'
    },
    {
        url: 'https://images.pexels.com/photos/1187954/pexels-photo-1187954.jpeg',
        name: 'bag7.jpg'
    },
    {
        url: 'https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg',
        name: 'bag8.jpg'
    },
    {
        url: 'https://images.pexels.com/photos/1152075/pexels-photo-1152075.jpeg',
        name: 'hero.jpg'
    }
];

// Download function
function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                const filePath = path.join(imagesDir, filename);
                const writeStream = fs.createWriteStream(filePath);
                res.pipe(writeStream);
                writeStream.on('finish', () => {
                    writeStream.close();
                    console.log(`Downloaded: ${filename}`);
                    resolve();
                });
            } else {
                reject(`Failed to download ${filename}`);
            }
        }).on('error', (err) => {
            reject(err);
        });
    });
}

// Download all images
async function downloadAllImages() {
    try {
        await Promise.all(images.map(img => downloadImage(img.url, img.name)));
        console.log('All images downloaded successfully!');
    } catch (error) {
        console.error('Error downloading images:', error);
    }
}

downloadAllImages(); 