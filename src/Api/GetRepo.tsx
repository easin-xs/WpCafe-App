import React, { useEffect, useState } from 'react';

const GetRepo = async () => {
    let data: any = [];

    data =  await fetch('https://api.github.com/search/code?q=addClass+user:mozilla&page=1&per_page=5');
    data = await data.json();
console.log(data)
    return data;
}

export default GetRepo;