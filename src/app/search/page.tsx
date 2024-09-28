import SearchForm from "@/components/SearchForm/SearchForm";

const Search = () => {
  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <div className="mb-10 space-y-4">
        <h1 className="text-center text-4xl font-bold">
          Help us achieve your goals
        </h1>
        <p className="text-center text-lg">
          Please fill the form below in order to help us find the best NGO
          <br />
          partner for you.
        </p>
      </div>
      <SearchForm />
    </div>
  );
};

export default Search;
