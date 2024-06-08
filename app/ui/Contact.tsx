"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import Modal from '@/components/Modal'; // Pastikan path ke Modal benar

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    
    const { data, error } = await supabase
      .from('contacts')
      .insert([{ name, email, message }]);
    
    setIsLoading(false);

    if (error) {
      setSuccess(false);
      console.error(error);
    } else {
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSuccess(null);
  };

  return (
    <div id='contact' className='flex flex-col justify-between items-center bg-foreground text-secondary gap-10 py-10'>
      <div className='font-medium lg:text-[50px] text-[30px]'>
        Contact ME
      </div>

      <form onSubmit={handleSubmit} className='lg:text-[20px] font-medium flex flex-col items-center justify-center gap-5 w-full'>
        <div className='flex flex-col items-start gap-2'>
          <label htmlFor='name'>Name :</label>
          <input 
            type='text' 
            name='name' 
            id='name' 
            className='border-foreground border-[2px] lg:w-[700px] w-[300px] h-[40px] lg:h-[70px] px-5 rounded-md text-black' 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col items-start gap-2'>
          <label htmlFor='email'>Email :</label>
          <input 
            type='email' 
            name='email' 
            id='email' 
            className='border-foreground border-[2px] lg:w-[700px] w-[300px] h-[40px] lg:h-[70px] px-5 rounded-md text-black' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col items-start gap-2'>
          <label htmlFor='message'>Message :</label>
          <textarea 
            name='message' 
            id='message' 
            className='border-foreground border-[2px] p-5 rounded-md text-black lg:w-[700px] h-[100px] w-[300px] lg:h-[250px] ' 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <Button type='submit' variant={"default"} className='w-full h-10 text-[20px]'>
            {isLoading ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </form>

      {success !== null && (
        <p className='text-[20px] mt-5'>
          {success ? 'Message sent successfully!' : 'Failed to send message.'}
        </p>
      )}

      <Modal show={showModal} onClose={closeModal}>
        <p className='text-foreground'>Your message has been sent successfully!</p>
      </Modal>
    </div>
  );
}
