import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {
  private boards = [
    {
      id: 1,
      name: 'name1',
      contents: 'title1',
    },
    {
      id: 2,
      name: 'name2',
      contents: 'title2',
    },
    {
      id: 3,
      name: 'name3',
      contents: 'title3',
    },
  ];
  findAll() {
    return this.boards.sort((a, b) => a.id - b.id);
  }

  find(id: number) {
    const index = this.getBoardId(id);
    return index > -1 ? this.boards[index] : null;
  }

  create(data: CreateBoardDto) {
    const newBoard = { id: this.getNextId(), ...data };
    this.boards.push(newBoard);
    return newBoard;
  }

  update(id: number, data: UpdateBoardDto) {
    const index = this.getBoardId(id);
    if (index > -1) {
      this.boards[index] = {
        ...this.boards[index],
        ...data,
      };
      return {
        message: 'Board updated successfully',
        updatedBoard: this.boards[index],
      };
    }
    return {
      message: 'Board not found',
      data: null,
    };
  }

  delete(id: number) {
    const index = this.getBoardId(id);
    if (index > -1) {
      const deletedBoard = { ...this.boards[index] };
      this.boards.splice(index, 1);
      return {
        message: 'Board deleted successfully',
        deletedBoard: deletedBoard,
      };
    }
    return {
      message: 'Board not found',
      data: null,
    };
  }

  getBoardId(id: number) {
    return this.boards.findIndex((board) => board.id === id);
  }

  getNextId() {
    return this.boards.length
      ? Math.max(...this.boards.map((board) => board.id)) + 1
      : 1;
  }
}
