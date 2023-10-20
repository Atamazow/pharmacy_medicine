import style from './Modal.module.scss';
import { useEffect } from 'react';

function Modal({ isOpen, closeModal }) {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else if (!isOpen) {
    document.body.style.overflow = 'scroll';
  }
  if (!isOpen) return null;
  const close = (event) => {
    if (event.target === event.currentTarget) {
      closeModal(!isOpen);
    }
  };

  const recommendations = ['Карвалол', 'Парацитамол', 'Анальгин', 'Трамал'];
  return (
    <div className={style.modal_backdrop} onClick={close}>
      <div className={style.modal_content}>
        <h6 className={style.Searches_often}>Часто ищут</h6>
        <ul>
          {recommendations.map((item, i) => (
            <li key={i} className={style.list_reccomented}>
              <svg
                className={style.icon}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g id="search">
                  <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
                </g>
              </svg>
              <div className={style.item_reccomented}>{item}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Modal;
