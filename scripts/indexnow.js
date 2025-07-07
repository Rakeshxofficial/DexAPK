// IndexNow API integration script
// This script scans the dist directory for HTML files and submits their URLs to IndexNow API

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path'; 
import fetch from 'node-fetch';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const config = {
  domain: 'https://dexapk.com',
  distFolder: path.join(__dirname, '../dist'),
  indexNowApiUrl: 'https://api.indexnow.org/indexnow',
  apiKey: '6b43e927236947628d8a6590ceebc78c',
  keyLocation: 'https://dexapk.com/6b43e927236947628d8a6590ceebc78c.txt'
};

// Function to recursively find all HTML files
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (path.extname(file).toLowerCase() === '.html') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to convert file paths to URLs
function filePathsToUrls(filePaths, distFolder, domain) {
  return filePaths.map(filePath => {
    // Get relative path from dist folder
    const relativePath = path.relative(distFolder, filePath);
    
    // Convert Windows backslashes to forward slashes if needed
    const normalizedPath = relativePath.replace(/\\/g, '/');
    
    // Remove index.html from the end for cleaner URLs
    const urlPath = normalizedPath.replace(/\/index\.html$/, '/');
    
    // Combine with domain
    return `${domain}/${urlPath}`;
  });
}

// Function to submit URLs to IndexNow API
async function submitToIndexNow(urls, apiKey, keyLocation) {
  if (urls.length === 0) {
    console.log('No URLs to submit to IndexNow API');
    return;
  }
  
  const payload = {
    host: new URL(config.domain).hostname,
    key: apiKey,
    keyLocation: keyLocation,
    urlList: urls
  };
  
  console.log(`Submitting ${urls.length} URLs to IndexNow API...`);
  
  try {
    const response = await fetch(config.indexNowApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    if (response.ok) {
      console.log('Successfully submitted URLs to IndexNow API');
      console.log(`Response: ${await response.text()}`);
    } else {
      console.error(`Failed to submit URLs to IndexNow API: ${response.status} ${response.statusText}`);
      console.error(`Response: ${await response.text()}`);
    }
  } catch (error) {
    console.error('Error submitting URLs to IndexNow API:', error);
  }
}

// Main function
async function main() {
  try {
    console.log('Starting IndexNow submission process...');
    
    // Find all HTML files
    const htmlFiles = findHtmlFiles(config.distFolder);
    console.log(`Found ${htmlFiles.length} HTML files`);
    
    // Convert file paths to URLs
    const urls = filePathsToUrls(htmlFiles, config.distFolder, config.domain);
    
    // Submit URLs to IndexNow API
    await submitToIndexNow(urls, config.apiKey, config.keyLocation);
    
    console.log('IndexNow submission process completed');
  } catch (error) {
    console.error('Error in IndexNow submission process:', error);
    process.exit(1);
  }
}

// Run the main function
main();