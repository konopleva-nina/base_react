//импортируем типы
//импортируем АПИ библиотеки
//описываем логику работы с хранилищем
import { create } from 'zustand';
import { API_BASE_URL } from 'shared/config';

/**
 * @typedef {import('./types').PhotosStateCreator} StateCreator
 * @typedef {import('./types').PhotosState} State
*/

export const usePhotos = create(/**@type {StateCreator} */ (set) => ({
  /*State for coun,t */
  photoCount: 0,
  setPhotoCount: (photoCount) => set((/**@type {State} */ state) => ({ ...state, photoCount })),
  /*State for photos */
  photos: [],
  isPhotosLoading: false,
  photosErrorMessage: '',
  getPhotos: async (count) => {
    try {
      set(() => ({ isPhotosLoading: true }));
      const endPoint = `photos?_start=0&_limit=${count}`;
      const response = await fetch(`${API_BASE_URL}/${endPoint}`);
      if (!response.ok) throw new Error('Photos not received');
      const photosFromAPI = await response.json();
      set(() => ({ photos: photosFromAPI }));
    } catch (/**@type {*}*/ error) {
      set(() => ({ photosErrorMessage: error.message }));
    };
    set(() => ({ isPhotosLoading: false }));
  },

  resetPhotos: () => set((/**@type {State} */ state) => ({ ...state, photos: [] })),
}));
