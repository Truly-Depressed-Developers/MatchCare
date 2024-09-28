const Profile = ({ params }: { params: { id: string } }) => {
  const profileID = params.id;

  return <div>{profileID}</div>;
};

export default Profile;
