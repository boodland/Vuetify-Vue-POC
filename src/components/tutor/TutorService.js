const WEB_API_ADRESS = 'https://randomuser.me/api/?results=30';

const convertToTutorItem = randomUser =>
  ({
    fullName: `${randomUser.name.first} ${randomUser.name.last}`,
    thumbnail: randomUser.picture.thumbnail,
    rating: Math.floor(Math.random() * 5) + 1,
  });

class TutorService {
  static async getTutorsAsync() {
    const response = await fetch(WEB_API_ADRESS);
    const respJson = await response.json();
    return respJson.results.map(randUser => convertToTutorItem(randUser));
  }
}

export default TutorService;
