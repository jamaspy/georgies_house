'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { date, z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(2, {
    message: 'Message must be at least 2 characters.',
  }),
});

const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!values) return console.log('No values');
    setSending(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data.id) {
        setSent(true);
        setSending(false);
      } else {
        setSent(false);
        setSending(false);
        console.error('There was an error:', data);
      }
      form.reset();
      return data;
    } catch (error) {
      console.error('There was an error:', error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full max-w-2xl mx-auto font-katarine"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your full name</FormLabel>
              <FormControl>
                <Input placeholder="Full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your email address</FormLabel>
              <FormControl>
                <Input placeholder="Email address" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your email address so we can get back to you.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              type="submit"
              disabled={sending}
              className={`${
                sending ? 'bg-gray-400' : 'bg-george-black'
              } "font-aptly font-bold  hover:bg-george-lime hover:text-george-black"`}
            >
              {sending ? 'Sending...' : sent ? 'Sent!' : 'Send'}
            </Button>
          </motion.button>
          {sent && (
            <p
              className={`${
                !sent ? 'visible' : 'invisible'
              } text-george-magenta font-semibold`}
            >
              Thank you. We&rsquo;ll be in touch as soon as we can.
            </p>
          )}
        </div>
      </form>
    </Form>
  );
};
export default ContactForm;
