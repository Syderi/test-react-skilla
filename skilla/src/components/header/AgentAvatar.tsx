import styles from './AgentAvatar.module.scss';
import VectorHeader from './VectorHeader';
import avatar from '../../assets/image/avatar1.png';

function AgentAvatar() {
  return (
    <div className={styles.agentAvatar}>
      <img src={avatar} alt="avatar" />
      <VectorHeader />
    </div>
  );
}

export default AgentAvatar;
