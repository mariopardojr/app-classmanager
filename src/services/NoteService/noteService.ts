import { AxiosError } from 'axios';
import { api } from '../api';
import { IRawNote } from '../interfaces/IRawNote';
import { NoteValues } from './types';

const getNotesByStudentId = async (id: string) => {
  try {
    const { data } = await api.get(`/note/${id}`);

    return data;
  } catch (error) {
    const err = error as AxiosError;
    return err.response?.data;
  }
};

const createNote = async (note: NoteValues): Promise<IRawNote> => {
  try {
    const { data } = await api.post<IRawNote>('/note/create', note);

    return data;
  } catch (error) {
    const err = error as AxiosError;
    return err.response?.data;
  }
};

const updateNote = async (note: IRawNote): Promise<void> => {
  console.log(note);
  try {
    await api.patch(`/note/${note._id}`, note);
  } catch (error) {
    const err = error as AxiosError;
    return err.response?.data;
  }
};

const NoteService = {
  createNote,
  updateNote,
  getNotesByStudentId,
};

export default NoteService;
