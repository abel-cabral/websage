import styles from './Footer.module.css';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import React from "react";

import LoadingButton from '@mui/lab/LoadingButton';


export default function Footer(props) {

  const [loading, setLoading] = React.useState(false);
  
  const statusBotao = (status) => { // Boolean
    setLoading(status)
  }

  return (
    <>
      <footer className={styles.footer}>
        <LoadingButton
          size="small"
          onClick={() => props.salvarCard(props.url, statusBotao)}
          endIcon={<LibraryAddIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Salvar</span>
        </LoadingButton>
      </footer>
    </>
  );
}
