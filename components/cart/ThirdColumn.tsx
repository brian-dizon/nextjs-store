'use client';
import { useState, useTransition } from 'react';
import SelectProductAmount from '../single-product/SelectProductAmount';
import { Mode } from '../single-product/SelectProductAmount';
import FormContainer from '../form/FormContainer';
import { SubmitButton } from '../form/Buttons';
import { removeCartItemAction, updateCartItemAction } from '@/utils/actions';
import { toast } from 'sonner';

function ThirdColumn({ amount, id }: { amount: number; id: string }) {
  const [quantity, setQuantity] = useState(amount);
  const [isLoading, startTransition] = useTransition();

  const handleAmountChange = async (value: number) => {
    setQuantity(value);
    startTransition(async () => {
      try {
        await updateCartItemAction({ amount: value, cartItemId: id });
        toast.success('Cart updated');
      } catch (error) {
        toast.error('Failed to update cart');
      }
    });
  };

  return (
    <div className='md:ml-8'>
      <SelectProductAmount
        amount={quantity}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={isLoading}
      />
      <FormContainer action={removeCartItemAction}>
        <input type='hidden' name='id' value={id} />
        <SubmitButton size='sm' className='mt-4' text='remove' />
      </FormContainer>
    </div>
  );
}
export default ThirdColumn;