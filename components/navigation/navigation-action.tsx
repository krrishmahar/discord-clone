'use client'
import { Plus } from 'lucide-react';
import ActionTooltip from '@/components/tool-tip';
import { useModel } from '@/hooks/use-model-store';

const NavigationAction = () => {

  const { onOpen } = useModel();

  return (
    <ActionTooltip side='right' align='center' label='Add a server'>
        <button className='group flex  items-center'
        onClick={()=> {
          onOpen("createServer")
        }}>
            <div className='flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transistion-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500'>
                <Plus className='group-hover:text-white transistion text-emerald-500' size={25}></Plus>
            </div>
        </button>
    </ActionTooltip>
  )
}

export default NavigationAction