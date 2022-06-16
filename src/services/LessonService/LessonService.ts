import { AxiosError } from 'axios';
import { api } from '../api';
import { IRawLesson, LessonCreate } from './types';

const getLessonsByStudentId = async (id: string) => {
  try {
    const { data } = await api.get(`/lessons/${id}`);

    return data;
  } catch (error) {
    const err = error as AxiosError;
    return err.response?.data;
  }
};

const createLesson = async (lesson: LessonCreate): Promise<IRawLesson> => {
  console.log(lesson);
  try {
    const { data } = await api.post<IRawLesson>('/lessons/create', lesson);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    return err.response?.data;
  }
};

const updateLesson = async (lesson: IRawLesson): Promise<void> => {
  try {
    await api.patch(`/lessons/${lesson._id}`, lesson);
  } catch (error) {
    const err = error as AxiosError;
    return err.response?.data;
  }
};

const deleteNote = async (id: string): Promise<void> => {
  try {
    await api.delete(`/lessons/${id}`);
  } catch (error) {
    const err = error as AxiosError;
    return err.response?.data;
  }
};

const LessonService = {
  createLesson,
  updateLesson,
  deleteNote,
  getLessonsByStudentId,
};

export default LessonService;
