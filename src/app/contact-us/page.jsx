import { Button } from "@/common/button/Button";
import { Input } from "@/common/input/Input";
import { Textarea } from "@/common/textarea/Textarea";

const ContactUsPage = () => {
  return (
    <div className="container my-20 max-w-[900px]">
      <div className="text-center text-4xl font-bold mb-10">Contact Us</div>
      <div className="flex flex-col gap-6">
        <Input type={'email'} placeholder={'Email'} />
        <Input type={'phone'} placeholder={'Phone (Optional)'} />
        <Input type={'text'} placeholder={'Subject'} />
        <Textarea placeholder={'Message'} rows={5} />
        <Button>Submit</Button>
      </div>
    </div>
  );
};
export default ContactUsPage;
