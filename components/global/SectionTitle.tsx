import { Separator } from '@/components/ui/separator';

function SectionTitle({ text }: { text: string }) {
  return (
    <div className='mb-8'>
      <h2 className='text-3xl font-medium tracking-wider capitalize mb-4'>
        {text}
      </h2>
      <Separator />
    </div>
  );
}

export default SectionTitle;
