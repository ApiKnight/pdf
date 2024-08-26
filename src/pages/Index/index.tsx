import EditForm from '@/components/EditForm';
import EditTemplate from '@/components/EditTemplate';
import RenderResume from '@/components/RenderResume';
import { setShowEditTemplateModal } from '@/store/showEditTemplateModal';
import { Button } from 'antd';
import { useCallback } from 'react';

function Index() {
  const handleClick = useCallback(() => {
    setShowEditTemplateModal(true);
  },[]);

  return (
    <div style={{ display: 'flex', gap: 100 }}>
      <div>
        <EditForm />
        <EditTemplate />
      </div>
      <div style={{width: 500}}>

      </div>
      <div>
        <Button onClick={handleClick}>编辑模版</Button>
        <RenderResume />
      </div>
    </div>
  )
}

export default Index;
