import React, { useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import style from './Search.module.scss';
import { setSearchValue } from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../ModalOkno/Modal';

function Search(props) {
  const modal = useSelector((state) => state.filterSlice.isModal);
  const [value, setValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 1000),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  const onClickClear = () => {
    setValue('');
    inputRef.current.focus();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={style.root}>
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
      <input
        onClick={openModal}
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={style.input}
        placeholder="Поиск лекарств..."
        type="text"
      />
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
      {value && (
        <svg
          onClick={onClickClear}
          className={style.closeIcon}
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      )}
    </div>
  );
}

export default Search;
