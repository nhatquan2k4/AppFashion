import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';


const cloudinary = require('cloudinary');

cloudinary.v2.config({
    cloud_name: 'dwuwoqode',
    api_key: '295554132721264',
    api_secret: 'lâý ở trong cloudinary',
    secure: true,
});

const testimg = () => {
    const cld = new Cloudinary({ cloud: { cloudName: 'dwuwoqode' } });

    // Use this sample image or upload your own via the Media Explorer
    const img = cld
        .image('cld-sample-5')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

    return (<AdvancedImage cldImg={img} />);
};

export default testimg