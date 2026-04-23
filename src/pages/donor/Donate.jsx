import DonationForm from "../../components/donor/DonationForm";
import DonorBottomNav from "../../components/donor/DonorBottomNav";

function Donate() {
  return (
    <>

      <div style={{
          padding: 16, marginTop: 0,
          marginRight: 300,
          marginBottom: 0,
          marginLeft: 300,
          paddingBottom: 100,
          
        }}>
        <DonationForm />
        

      </div>

      <DonorBottomNav />
    </>
  );
}

export default Donate;
