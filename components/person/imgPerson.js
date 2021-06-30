import styled from "../../styles/person.module.css";
import Image from 'next/image'
export default function ImgPerson({ data }) {
    // console.log(data.gender)
  return (
    <div className={styled.imagePerson}>
      {(data.profile_path === "" && (
        <Image
          src="/error-image-generic.png"
          alt="me"
          width="300"
          height="450"
        />
      )) || (
        <img
          alt={data.name}
          src={`https://image.tmdb.org/t/p/w300/${data.profile_path}`}
        />
      )}
    </div>
  );
}
