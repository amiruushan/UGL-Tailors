
import React from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="w-full text-black py-4 mt-auto border-t border-none" style={{ backgroundColor: "#e5e5ebff" }}>
      <div className="flex flex-row justify-between max-w-screen-xl mx-auto px-4">

        <div className='flex flex-col text-left'>
          <h2 className='text-4xl font-extrabold'>UGL Tailors</h2>
          <p className='text-18px'>Premium military and industrial tailoring services.</p>
        </div>

        <div className="mt-2 text-left space-x-5">
          <h3 className='font-bold text-18px pb-2'>Quick Links</h3>
          <div className='flex flex-col gap-2'>
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>

        <div className='text-left'>
          <h3 className='font-bold text-18px pb-2'>Contacts</h3>
          <div className='flex flex-col gap-2'>
            <div className="flex items-center gap-2">
            <MapPinIcon className="w-5 h-5" />
            <span>"Amaragiri", Uluwitike, Galle</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5" />
            <span>+94 71 050 4005</span>
          </div>
          <div className="flex items-center gap-2">
            <EnvelopeIcon className="w-5 h-5" />
            <span>uglclothings.ac@gmail.com </span>
          </div>
          </div>
        </div>

        <div className='flex flex-col text-left'>
          <h3 className='font-bold text-18px pb-2'>Follow Us</h3>
          <div className='flex flex-row gap-3 text-2xl'>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
      <hr className="border-t border-black my-4 w-[80%] mx-auto" />
      <p className="text-sm">
        &copy; {new Date().getFullYear()} UGL Tailors. All rights reserved.
      </p>
    </footer>
  );
}
