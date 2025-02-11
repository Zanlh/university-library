import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "../constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />

      <BookList
        title="Lastest Book"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
