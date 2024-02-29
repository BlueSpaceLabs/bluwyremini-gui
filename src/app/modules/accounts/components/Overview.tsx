import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { KTIcon } from "../../../../_metronic/helpers";
import {
  ChartsWidget1,
  ListsWidget5,
  TablesWidget1,
  TablesWidget5,
} from "../../../../_metronic/partials/widgets";
// import { useQuery } from "react-query";
import axios from "axios";
import useStaticData from "../../../StaticData";

// const serviceGetAgentProfileDetails = async () => {

//   const url = `${baseUrl}/getAgentProfileDetails.php`
//   const accessKey =
//     "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm";
//   const agentName = "rohitborkar";

//   try {
//     const response = await axios.get(url, {
//       params: {
//         accessKey,
//         agentName,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     throw new Error("Error fetching agent profile details");
//   }
// };

const initialProfileData = {
  agentAddress: "",
  agentType: "",
  company: "",
  companyWebsite: "",
  country: "",
  createdDatetime: "",
  emailId: "",
  firstName: "",
  id: "",
  language: "",
  lastName: "",
  mobileNo: "",
  modifiedDatetime: "",
  role: "",
  timezone: "",
  username: "",
};
export function Overview() {
  const { baseUrl } = useStaticData();

  const [profileData, setProfileData] = React.useState(initialProfileData);
  const storedUserName = sessionStorage.getItem("userName");

  // const {
  //   data: getProfileData,
  //   // error,
  //   // isLoading,
  // } = useQuery("agentProfileDetails", serviceGetAgentProfileDetails);

  // console.log({ profileData });

  // React.useEffect(() => {
  //   if (getProfileData) {
  //     setProfileData(getProfileData.dataArray);
  //   }
  // }, [getProfileData]);

  useEffect(() => {
    const fetchAgentProfile = async () => {
      try {
        const url = `${baseUrl}/getAgentProfileDetails.php`;
        const accessKey =
          "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm";

        const response = await axios.get(url, {
          params: {
            accessKey,
            agentName: storedUserName,
          },
        });

        const responseData = response.data;
        const responseProfileData = responseData?.dataArray[0];
        // console.log("response getAgentProfileDetails", responseProfileData);

        if (responseProfileData) setProfileData(responseProfileData);
      } catch (error) {
        console.error("Error fetching agent profile details:", error);
      }
    };

    if (storedUserName) fetchAgentProfile();
  }, [storedUserName]);

  return (
    <>
      <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
        <div className="card-header cursor-pointer">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Profile Details </h3>
          </div>

          <Link
            to="/crafted/account/settings"
            className="btn btn-primary align-self-center"
          >
            Edit Profile
          </Link>
        </div>

        <div className="card-body p-9">
          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Full Name</label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-gray-900">
                {`${profileData?.firstName} ${profileData?.lastName}`}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Address</label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-gray-900">
                {profileData.agentAddress}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Country</label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-gray-900">
                {profileData.country}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Email</label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-gray-900">
                {profileData.emailId}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Mobile Number
              <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Phone number must be active"
              ></i>
            </label>

            <div className="col-lg-8 d-flex align-items-center">
              <span className="fw-bolder fs-6 me-2">
                {profileData.mobileNo}
              </span>

              {profileData.mobileNo && (
                <span className="badge badge-success">Verified</span>
              )}
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Company</label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-gray-900">
                {profileData.company}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Company Website
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-gray-900">
                {profileData.companyWebsite}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted"> Role</label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-gray-900">
                {profileData.role}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted"> Time Zone</label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-gray-900">
                {profileData.timezone}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Language</label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-gray-900">
                {profileData.language}
              </span>
            </div>
          </div>
          {/* old data */}

          <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
            <KTIcon
              iconName="information-5"
              className="fs-2tx text-warning me-4"
            />
            <div className="d-flex flex-stack flex-grow-1">
              <div className="fw-bold">
                <h4 className="text-gray-800 fw-bolder">
                  We need your attention!
                </h4>
                <div className="fs-6 text-gray-600">
                  Your payment was declined. To start using tools, please
                  <Link className="fw-bolder" to="/crafted/account/settings">
                    {" "}
                    Add Payment Method
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*}
      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ChartsWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>

        <div className='col-xl-6'>
          <TablesWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div>

      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ListsWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>

        <div className='col-xl-6'>
          <TablesWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div>*/}
    </>
  );
}
