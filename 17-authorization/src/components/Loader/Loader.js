import s from './Loader.module.css';

const Loader = () =>
  // { img }
  {
    return (
      <div className={s.loaderWrapper}>
        <div className={s.loader}>
          <img
            src={require('assets/cat.gif')}
            width='350'
            alt='loader...'
            style={{ borderRadius: '50%' }}
          />
          {/* <p>{img.loader}</p> */}
        </div>
      </div>
    );
  };

export default Loader;
