import { getRandomInteger, getRandomArrayElement, createCommentsIdGenerator } from './util.js';

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

const DESCRIPTION_FIRST_WORD = [
  'Красивый',
  'Плохой',
  'Блестящий',
  'Завораживающий',
  'Так себе',
];

const DESCRIPTION_SECOND_WORD = [
  'снимок',
  'вид',
  'пейзаж',
  'натюрморт',
  'кадр',
];

const COMMENTS = `Всё отлично!
В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`;

const COUNT_PHOTO_POST = 25;
const COUNT_AVATAR = 6;
const MIN_COUNT_COMMENTS = 3;
const MAX_COUNT_COMMENTS = 20;
const MIN_COUNT_LIKES = 15;
const MAX_COUNT_LIKES = 200;

const generateCommentsId = createCommentsIdGenerator();

const createCommentPhoto = () => ({
  id: generateCommentsId(),
  avatar: `img/avatar-${getRandomInteger(1, COUNT_AVATAR)}.svg`,
  message: getRandomArrayElement(COMMENTS.split('\n')),
  name: `${getRandomArrayElement(NAMES)} ${ getRandomArrayElement(SURNAMES)}`,
});

const getArrayCommentsPhoto = () => {
  const comments = [];
  let i = 1;
  const countComments = getRandomInteger(MIN_COUNT_COMMENTS,MAX_COUNT_COMMENTS);
  while(i <= countComments){
    comments.push(createCommentPhoto());
    i++;
  }
  return comments;
};

const createPhotoPost = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: `${getRandomArrayElement(DESCRIPTION_FIRST_WORD)} ${getRandomArrayElement(DESCRIPTION_SECOND_WORD)}`,
  likes: getRandomInteger(MIN_COUNT_LIKES ,MAX_COUNT_LIKES),
  comments: getArrayCommentsPhoto(),
});

const getPhotos = () => Array.from({length: COUNT_PHOTO_POST}, (_, index) => createPhotoPost(index + 1));

export {getPhotos};
