import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface save {
  key: string, // Note: Do not use underscore("_") in key!
    data: object,
    expires:any
}

export const storage = new Storage({
  // max key-ids
  size: 1000,

  storageBackend: AsyncStorage, 

  // expire time
  defaultExpires: null,

  // cache data in the memory.
  enableCache: true,

  
  sync: {}
    
});

export const storageSave = (key:string,objet:object) =>{

  let data:save ={
    key: key, // Note: Do not use underscore("_") in key!
    data: objet,
    expires: null
  };

 return  storage.save(data);

}

export const storageGet = (key:string) =>{

  return storage.load({
    key: key
  });
}

