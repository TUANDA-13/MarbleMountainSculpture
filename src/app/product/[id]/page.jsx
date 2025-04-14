import { Button } from '@/common/button/Button';
import { Input } from '@/common/input/Input';
import { Textarea } from '@/common/textarea/Textarea';
import ZoomImage from '@/components/image-zoom/ZoomImage';

export default () => {
  return (
    <div className="container flex gap-6 my-20">
      <div className="w-[40%] mt-[80px]">
        <ZoomImage />
      </div>
      <div className="flex-1">
        <div className="text-center text-4xl font-bold mb-10">Contact Us</div>
        <div className="flex flex-col gap-6">
          <Input type={'email'} placeholder={'Email'} />
          <Input type={'phone'} placeholder={'Phone (Optional)'} />
          <Input type={'text'} placeholder={'Subject'} />
          <Textarea placeholder={'Message'} rows={5} />
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  );
};
