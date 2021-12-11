import React from "react";
import { Post } from "./models";

/*
image
short_description
title
author
date_of_publishing
contiue reading button
category
*/

/* 

Different Categories
- Sports
- Web Development
- Education
- Coding
- Photography
- Other 
*/

export const DUMMY_POSTS: Post[] = [
  {
    id: "p1",
    title: "This is the first Post",
    author: "coffee__coder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    time: new Date(2018, 15, 24, 10, 33, 30),
    image: "https://wallpaper.dog/large/20512965.png",
    category: "Other",
    profilePic: "https://wallpapercave.com/wp/wp9109396.jpg",

    article: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec lorem sed enim dapibus eleifend. Proin venenatis massa ac dapibus pellentesque. Sed a arcu vitae dui aliquam volutpat. Duis id quam in arcu facilisis eleifend ut sit amet tellus. Etiam gravida mi at ligula semper, at egestas ante rhoncus. Vestibulum faucibus maximus posuere. Maecenas a porta dolor. Etiam non vestibulum odio. Aliquam non lorem volutpat neque mollis aliquam vitae a enim. Praesent nisl urna, luctus vel neque ac, suscipit mollis purus. Nullam nibh turpis, finibus quis facilisis a, lacinia id dui. Proin vitae orci vitae ipsum lobortis bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nec quam nec sem luctus dignissim.",
      " Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In quis posuere mi. Sed vitae sem sed nisl venenatis luctus. Sed tincidunt feugiat nisl, sit amet placerat ligula condimentum quis. Vivamus ac ultricies magna. Nunc vehicula neque at diam facilisis faucibus. Aliquam posuere dui et arcu tincidunt, vitae venenatis leo malesuada. Quisque quam metus, iaculis quis feugiat sed, mollis non tortor. Nam vitae finibus risus, quis laoreet arcu.",
      " Maecenas pharetra volutpat odio, eget luctus lectus finibus at. Vivamus in lacus ut nunc varius auctor nec sit amet turpis. Vivamus sit amet consectetur arcu, eu elementum leo. Curabitur at commodo nisi. Vivamus sed ante finibus, vulputate lacus eget, facilisis purus. Mauris libero dui, gravida a tellus ac, porta gravida massa. Fusce at felis feugiat, euismod nulla a, posuere tellus. Praesent ac ullamcorper nisi. Proin feugiat volutpat arcu eget dapibus. Cras purus lacus, sagittis vel maximus sed, rutrum eu tellus. Aenean vitae augue at massa ultrices congue sed non neque",
    ],

    comments: [
      {
        id: "c1",
        text: "This is the best in the world OMG",
        commentedBy: "stefanKatwaroo",
      },
    ],
  },
  {
    id: "p2",
    title: "Best NPM Packages",
    author: "coffee__coder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    time: new Date(2019, 15, 24, 10, 14, 30),
    image: "https://wallpapercave.com/wp/wp5070716.jpg",
    category: "Web Development",
    profilePic: "https://wallpapercave.com/wp/wp9109396.jpg",
    article: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec lorem sed enim dapibus eleifend. Proin venenatis massa ac dapibus pellentesque. Sed a arcu vitae dui aliquam volutpat. Duis id quam in arcu facilisis eleifend ut sit amet tellus. Etiam gravida mi at ligula semper, at egestas ante rhoncus. Vestibulum faucibus maximus posuere. Maecenas a porta dolor. Etiam non vestibulum odio. Aliquam non lorem volutpat neque mollis aliquam vitae a enim. Praesent nisl urna, luctus vel neque ac, suscipit mollis purus. Nullam nibh turpis, finibus quis facilisis a, lacinia id dui. Proin vitae orci vitae ipsum lobortis bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nec quam nec sem luctus dignissim.",
      " Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In quis posuere mi. Sed vitae sem sed nisl venenatis luctus. Sed tincidunt feugiat nisl, sit amet placerat ligula condimentum quis. Vivamus ac ultricies magna. Nunc vehicula neque at diam facilisis faucibus. Aliquam posuere dui et arcu tincidunt, vitae venenatis leo malesuada. Quisque quam metus, iaculis quis feugiat sed, mollis non tortor. Nam vitae finibus risus, quis laoreet arcu.",
      " Maecenas pharetra volutpat odio, eget luctus lectus finibus at. Vivamus in lacus ut nunc varius auctor nec sit amet turpis. Vivamus sit amet consectetur arcu, eu elementum leo. Curabitur at commodo nisi. Vivamus sed ante finibus, vulputate lacus eget, facilisis purus. Mauris libero dui, gravida a tellus ac, porta gravida massa. Fusce at felis feugiat, euismod nulla a, posuere tellus. Praesent ac ullamcorper nisi. Proin feugiat volutpat arcu eget dapibus. Cras purus lacus, sagittis vel maximus sed, rutrum eu tellus. Aenean vitae augue at massa ultrices congue sed non neque",
    ],
    comments: [
      {
        id: "c1",
        text: "This is the best in the world OMG",
        commentedBy: "coffee__coder",
      },
    ],
  },
  {
    id: "p3",
    title: "Best React Animation Libraries",
    author: "coffee__coder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    time: new Date(2021, 11, 24, 10, 33, 30),
    image:
      "https://www.chillblast.com/learn/wp-content/uploads/2020/06/turned-on-flat-screen-computer-monitor-with-speakers-and-keyboard-4k.jpg",
    category: "Web Development",
    profilePic: "https://wallpapercave.com/wp/wp9109396.jpg",
    article: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec lorem sed enim dapibus eleifend. Proin venenatis massa ac dapibus pellentesque. Sed a arcu vitae dui aliquam volutpat. Duis id quam in arcu facilisis eleifend ut sit amet tellus. Etiam gravida mi at ligula semper, at egestas ante rhoncus. Vestibulum faucibus maximus posuere. Maecenas a porta dolor. Etiam non vestibulum odio. Aliquam non lorem volutpat neque mollis aliquam vitae a enim. Praesent nisl urna, luctus vel neque ac, suscipit mollis purus. Nullam nibh turpis, finibus quis facilisis a, lacinia id dui. Proin vitae orci vitae ipsum lobortis bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nec quam nec sem luctus dignissim.",
      " Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In quis posuere mi. Sed vitae sem sed nisl venenatis luctus. Sed tincidunt feugiat nisl, sit amet placerat ligula condimentum quis. Vivamus ac ultricies magna. Nunc vehicula neque at diam facilisis faucibus. Aliquam posuere dui et arcu tincidunt, vitae venenatis leo malesuada. Quisque quam metus, iaculis quis feugiat sed, mollis non tortor. Nam vitae finibus risus, quis laoreet arcu.",
      " Maecenas pharetra volutpat odio, eget luctus lectus finibus at. Vivamus in lacus ut nunc varius auctor nec sit amet turpis. Vivamus sit amet consectetur arcu, eu elementum leo. Curabitur at commodo nisi. Vivamus sed ante finibus, vulputate lacus eget, facilisis purus. Mauris libero dui, gravida a tellus ac, porta gravida massa. Fusce at felis feugiat, euismod nulla a, posuere tellus. Praesent ac ullamcorper nisi. Proin feugiat volutpat arcu eget dapibus. Cras purus lacus, sagittis vel maximus sed, rutrum eu tellus. Aenean vitae augue at massa ultrices congue sed non neque",
    ],
    comments: [
      {
        id: "c1",
        text: "This is the best in the world OMG",
        commentedBy: "stefanKatwaroo",
      },
    ],
  },
  {
    id: "p4",
    title: "Useful Chrome Extensions that you shouldn't Miss Out",
    author: "coffee__coder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    time: new Date(2011, 15, 21, 10, 33, 30),
    image:
      "https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3Rpdml0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
    category: "Coding",
    profilePic: "https://wallpapercave.com/wp/wp9109396.jpg",
    article: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec lorem sed enim dapibus eleifend. Proin venenatis massa ac dapibus pellentesque. Sed a arcu vitae dui aliquam volutpat. Duis id quam in arcu facilisis eleifend ut sit amet tellus. Etiam gravida mi at ligula semper, at egestas ante rhoncus. Vestibulum faucibus maximus posuere. Maecenas a porta dolor. Etiam non vestibulum odio. Aliquam non lorem volutpat neque mollis aliquam vitae a enim. Praesent nisl urna, luctus vel neque ac, suscipit mollis purus. Nullam nibh turpis, finibus quis facilisis a, lacinia id dui. Proin vitae orci vitae ipsum lobortis bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nec quam nec sem luctus dignissim.",
      " Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In quis posuere mi. Sed vitae sem sed nisl venenatis luctus. Sed tincidunt feugiat nisl, sit amet placerat ligula condimentum quis. Vivamus ac ultricies magna. Nunc vehicula neque at diam facilisis faucibus. Aliquam posuere dui et arcu tincidunt, vitae venenatis leo malesuada. Quisque quam metus, iaculis quis feugiat sed, mollis non tortor. Nam vitae finibus risus, quis laoreet arcu.",
      " Maecenas pharetra volutpat odio, eget luctus lectus finibus at. Vivamus in lacus ut nunc varius auctor nec sit amet turpis. Vivamus sit amet consectetur arcu, eu elementum leo. Curabitur at commodo nisi. Vivamus sed ante finibus, vulputate lacus eget, facilisis purus. Mauris libero dui, gravida a tellus ac, porta gravida massa. Fusce at felis feugiat, euismod nulla a, posuere tellus. Praesent ac ullamcorper nisi. Proin feugiat volutpat arcu eget dapibus. Cras purus lacus, sagittis vel maximus sed, rutrum eu tellus. Aenean vitae augue at massa ultrices congue sed non neque",
    ],
    comments: [
      {
        id: "c1",
        text: "This is the best in the world OMG",
        commentedBy: "coffee__coder",
      },
    ],
  },
  {
    id: "p5",
    title: "Junior vs Senior - how to write better code",
    author: "coffee__coder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    time: new Date(2018, 15, 24, 10, 33, 30),
    image:
      "https://startuppakistan.com.pk/wp-content/uploads/2021/02/c-users-dell-desktop-xzesdatxbnmdw4sk49ot4z-1200-1-1.jpeg",
    category: "Coding",
    profilePic: "https://wallpapercave.com/wp/wp9109396.jpg",
    article: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec lorem sed enim dapibus eleifend. Proin venenatis massa ac dapibus pellentesque. Sed a arcu vitae dui aliquam volutpat. Duis id quam in arcu facilisis eleifend ut sit amet tellus. Etiam gravida mi at ligula semper, at egestas ante rhoncus. Vestibulum faucibus maximus posuere. Maecenas a porta dolor. Etiam non vestibulum odio. Aliquam non lorem volutpat neque mollis aliquam vitae a enim. Praesent nisl urna, luctus vel neque ac, suscipit mollis purus. Nullam nibh turpis, finibus quis facilisis a, lacinia id dui. Proin vitae orci vitae ipsum lobortis bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nec quam nec sem luctus dignissim.",
      " Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In quis posuere mi. Sed vitae sem sed nisl venenatis luctus. Sed tincidunt feugiat nisl, sit amet placerat ligula condimentum quis. Vivamus ac ultricies magna. Nunc vehicula neque at diam facilisis faucibus. Aliquam posuere dui et arcu tincidunt, vitae venenatis leo malesuada. Quisque quam metus, iaculis quis feugiat sed, mollis non tortor. Nam vitae finibus risus, quis laoreet arcu.",
      " Maecenas pharetra volutpat odio, eget luctus lectus finibus at. Vivamus in lacus ut nunc varius auctor nec sit amet turpis. Vivamus sit amet consectetur arcu, eu elementum leo. Curabitur at commodo nisi. Vivamus sed ante finibus, vulputate lacus eget, facilisis purus. Mauris libero dui, gravida a tellus ac, porta gravida massa. Fusce at felis feugiat, euismod nulla a, posuere tellus. Praesent ac ullamcorper nisi. Proin feugiat volutpat arcu eget dapibus. Cras purus lacus, sagittis vel maximus sed, rutrum eu tellus. Aenean vitae augue at massa ultrices congue sed non neque",
    ],
    comments: [
      {
        id: "c1",
        text: "This is the best in the world OMG",
        commentedBy: "coffee__coder",
      },
    ],
  },
  {
    id: "p6",
    title: "React JS Interview Questions",
    author: "coffee__coder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    time: new Date(2018, 15, 24, 10, 33, 30),
    image: "https://i.imgur.com/v0ae8WM.jpg",
    category: "Web Development",
    profilePic: "https://wallpapercave.com/wp/wp9109396.jpg",
    article: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec lorem sed enim dapibus eleifend. Proin venenatis massa ac dapibus pellentesque. Sed a arcu vitae dui aliquam volutpat. Duis id quam in arcu facilisis eleifend ut sit amet tellus. Etiam gravida mi at ligula semper, at egestas ante rhoncus. Vestibulum faucibus maximus posuere. Maecenas a porta dolor. Etiam non vestibulum odio. Aliquam non lorem volutpat neque mollis aliquam vitae a enim. Praesent nisl urna, luctus vel neque ac, suscipit mollis purus. Nullam nibh turpis, finibus quis facilisis a, lacinia id dui. Proin vitae orci vitae ipsum lobortis bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nec quam nec sem luctus dignissim.",
      " Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In quis posuere mi. Sed vitae sem sed nisl venenatis luctus. Sed tincidunt feugiat nisl, sit amet placerat ligula condimentum quis. Vivamus ac ultricies magna. Nunc vehicula neque at diam facilisis faucibus. Aliquam posuere dui et arcu tincidunt, vitae venenatis leo malesuada. Quisque quam metus, iaculis quis feugiat sed, mollis non tortor. Nam vitae finibus risus, quis laoreet arcu.",
      " Maecenas pharetra volutpat odio, eget luctus lectus finibus at. Vivamus in lacus ut nunc varius auctor nec sit amet turpis. Vivamus sit amet consectetur arcu, eu elementum leo. Curabitur at commodo nisi. Vivamus sed ante finibus, vulputate lacus eget, facilisis purus. Mauris libero dui, gravida a tellus ac, porta gravida massa. Fusce at felis feugiat, euismod nulla a, posuere tellus. Praesent ac ullamcorper nisi. Proin feugiat volutpat arcu eget dapibus. Cras purus lacus, sagittis vel maximus sed, rutrum eu tellus. Aenean vitae augue at massa ultrices congue sed non neque",
    ],
    comments: [
      {
        id: "c1",
        text: "This is the best in the world OMG",
        commentedBy: "stefanKatwaroo",
      },
    ],
  },
  {
    id: "p7",
    title: "Make money as a Developer",
    author: "coffee__coder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    time: new Date(2020, 11, 24, 10, 33, 30),
    image:
      "https://media.istockphoto.com/photos/top-above-high-angle-view-portrait-of-his-he-nice-attractive-focused-picture-id1279133399?b=1&k=20&m=1279133399&s=170667a&w=0&h=NQlgTmoZq5oFrqWKN6-AfbdP0E_mpMEo5kfgtzITdOc=",
    category: "Coding",
    profilePic: "https://wallpapercave.com/wp/wp9109396.jpg",
    article: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec lorem sed enim dapibus eleifend. Proin venenatis massa ac dapibus pellentesque. Sed a arcu vitae dui aliquam volutpat. Duis id quam in arcu facilisis eleifend ut sit amet tellus. Etiam gravida mi at ligula semper, at egestas ante rhoncus. Vestibulum faucibus maximus posuere. Maecenas a porta dolor. Etiam non vestibulum odio. Aliquam non lorem volutpat neque mollis aliquam vitae a enim. Praesent nisl urna, luctus vel neque ac, suscipit mollis purus. Nullam nibh turpis, finibus quis facilisis a, lacinia id dui. Proin vitae orci vitae ipsum lobortis bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nec quam nec sem luctus dignissim.",
      " Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In quis posuere mi. Sed vitae sem sed nisl venenatis luctus. Sed tincidunt feugiat nisl, sit amet placerat ligula condimentum quis. Vivamus ac ultricies magna. Nunc vehicula neque at diam facilisis faucibus. Aliquam posuere dui et arcu tincidunt, vitae venenatis leo malesuada. Quisque quam metus, iaculis quis feugiat sed, mollis non tortor. Nam vitae finibus risus, quis laoreet arcu.",
      " Maecenas pharetra volutpat odio, eget luctus lectus finibus at. Vivamus in lacus ut nunc varius auctor nec sit amet turpis. Vivamus sit amet consectetur arcu, eu elementum leo. Curabitur at commodo nisi. Vivamus sed ante finibus, vulputate lacus eget, facilisis purus. Mauris libero dui, gravida a tellus ac, porta gravida massa. Fusce at felis feugiat, euismod nulla a, posuere tellus. Praesent ac ullamcorper nisi. Proin feugiat volutpat arcu eget dapibus. Cras purus lacus, sagittis vel maximus sed, rutrum eu tellus. Aenean vitae augue at massa ultrices congue sed non neque",
    ],
    comments: [],
  },
];
