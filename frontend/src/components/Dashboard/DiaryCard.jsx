// DiaryCard.js
import React from 'react';
import {
  Button,
  Text,
  Image,
} from '@chakra-ui/react';
import { FaEdit, FaHeart, FaRegHeart } from 'react-icons/fa';

const DiaryCard = ({ diary, onClick, onEditClick, onLikeClick }) => {
  return (
    <div
      className="p-4 transition-transform transform bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl hover:scale-105"
      onClick={onClick}
    >
      <h3 className="text-2xl font-semibold text-blue-600">{diary.title}</h3>
      <p className="text-gray-500">{diary.date.toDateString()}</p>

      {diary.imageUrl && (
        <Image
          src={diary.imageUrl}
          alt={diary.title}
          className="object-cover w-full h-40 mt-2 rounded-lg"
        />
      )}
      {diary.audioUrl && (
        <audio controls className="w-full mt-2">
          <source src={diary.audioUrl} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      )}
      <Text className="mt-4 text-gray-700 truncate">{diary.content}</Text>

      <div className="flex justify-between mt-4">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onEditClick(diary);
          }}
          colorScheme="blue"
          variant="outline"
          leftIcon={<FaEdit />}
        >
          Edit
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onLikeClick(diary);
          }}
          colorScheme={diary.liked ? 'red' : 'gray'}
          leftIcon={diary.liked ? <FaHeart /> : <FaRegHeart />}
        >
          {diary.likes || 0}
        </Button>
      </div>
    </div>
  );
};

export default DiaryCard;
