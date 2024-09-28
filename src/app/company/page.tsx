import CompanyForm from "@/components/CompanyForm";

const Company = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-md">
        <CompanyForm />
      </div>
    </div>
  );
};

export default Company;
