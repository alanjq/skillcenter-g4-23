import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Album from './components/Album';
import { Link } from 'expo-router'

export default function App() {
  const [albums, setAlbums] = useState([])

  const APIHOST = 'https://jsonplaceholder.typicode.com'


  useEffect(() => {
    fetch(`${APIHOST}/albums/1/photos`)
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch(() => {
        console.log('ERROR al obtener los álbumes');
        setAlbums([])
      })
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flexDirection: 'row', width: "100%", rowGap: 10 }}>
        {albums.map((album, key) =>
          <Link href="components/album">
            <Album key={key} title={album.title} image={album.url} link={album.link} />
          </Link>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
