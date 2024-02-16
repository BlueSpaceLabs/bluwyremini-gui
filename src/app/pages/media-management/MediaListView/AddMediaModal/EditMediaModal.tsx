import React from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
// import { defaultCreateAppData, ICreateAppData } from "./IAppModels";
import { KTIcon } from "../../../../../_metronic/helpers";
// import { url } from "inspector";
import { useMutation } from "react-query";
import { toAbsoluteUrl } from "../../../../../_metronic/helpers";
import { postAddMedia } from "../../../../services/MediaManagement";
import axios from "axios";
// import { StepperComponent } from "../../../../../_metronic/assets/ts/components";

// type Props = {
//   show: boolean;
//   handleClose: () => void;
// };

const modalsRoot = document.getElementById("root-modals") || document.body;

const blankImg = toAbsoluteUrl("media/svg/avatars/blank.svg");

const accessKey =
  "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm";

const EditMediaModal = ({
  show,
  handleClose,
  detailMediaData,
  deleteModalOpen,
  setData,
  setSnackbar,
}: // serverResponse,
// setServerResponse,
any) => {
  const [mediaTitle, setMediaTitle] = React.useState<string>("");
  const [mediaDescription, setMediaDescription] = React.useState<string>("");
  const [mediaChannel, setMediaChannel] = React.useState<string>("whatsApp");
  const [mediaFile, setMediaFile] = React.useState<string>(blankImg);
  const [formError, setFormError] = React.useState<boolean>(false);
  const [tenant, setTenant] = React.useState<string>("bsl");
  const [imageURL, setImageURL] = React.useState<string | null>(blankImg);

  const [mediaId, setMediaId] = React.useState<string>("");
  const [createdDatetime, setCreatedDatetime] = React.useState<string>("");
  const [mediaType, setMediaType] = React.useState<string>("");
  const [modifiedDatetime, setModifiedDatetime] = React.useState<string>("");
  const [editMedia, setEditMedia] = React.useState<boolean>(false);
  const [serverResponse, setServerResponse] = React.useState("");

  React.useEffect(() => {
    if (detailMediaData) {
      setMediaTitle(detailMediaData?.mediaTitle);
      setMediaDescription(detailMediaData?.mediaDescription);
      setMediaChannel(detailMediaData?.mediaChannel);
      setMediaFile(detailMediaData?.mediaUrl);
      setImageURL(detailMediaData?.mediaUrl);

      setMediaId(detailMediaData?.id);
      setMediaType(detailMediaData?.mediaType);
      setCreatedDatetime(detailMediaData?.createdDatetime);
      // setModifiedDatetime(detailMediaData?.mediaUrl);
    }
  }, [detailMediaData]);

  const { mutateAsync } = useMutation(postAddMedia);

  const handleSubmitForm = () => {
    if (mediaTitle.length < 2 || mediaDescription.length < 2) {
      setFormError(true);
    } else {
      /*mutateAsync({
        requestData: {
          tenant: "bsl",
          accessKey: accessKey,
          contact_data: {
            imageS3Id: "hard_codded",
            imageS3Url: "hard_codded",
            mediaTitle: mediaTitle,
            mediaDescription: mediaDescription,
            channelName: mediaChannel,
          },
        },
      });*/

      //console.log(mediaTitle,'::',mediaDescription,'::',mediaChannel)
      const formData = new FormData();
      console.log("subhro 001", mediaFile);

      formData.append("avatar", mediaFile);
      formData.append("mediaTitle", mediaTitle);
      formData.append("mediaDescription", mediaDescription);
      formData.append("mediaChannel", mediaChannel);
      formData.append("accessKey", accessKey);
      formData.append("tenant", tenant);

      try {
        let res = axios
          .post(
            // "http://3.108.229.60:8082/bluwyremini-backend/info/addMediaDetails.php",
            `http://3.108.229.60:8082/bluwyremini-backend/info/updateMediaDetails.php?id=${mediaId}`,

            formData,
            {
              headers: {
                "content-type": "multipart/form-data",
              },
            }
          )
          .then(function (response) {
            console.log(response.data);
            setMediaTitle("");
            setMediaDescription("");
            setMediaFile("");
            setServerResponse(response.data.message);
            setImageURL(blankImg);
            // console.log(response.data.message);

            setSnackbar({
              showSnackbar: true,
              severitySnackBar: "success",
              messageSnackBar: response?.data?.message
                ? response?.data?.message
                : "Successfully Updated Media !",
            });
            handleClose();
            return response;
          });

        //console.log(res)
      } catch (error) {
        console.log(error);

        setSnackbar({
          showSnackbar: true,
          severitySnackBar: "error",
          messageSnackBar: error?.response?.data?.message
            ? error?.response?.data?.message
            : "Failed to Update Media !",
        });
      }
    } //else
  }; //fn ends

  React.useEffect(() => {
    const getMediaDetails = async () => {
      const url =
        "http://3.108.229.60:8082/bluwyremini-backend/info/getMediaDetails.php";
      const accessKey =
        "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm";
      const selectedId = detailMediaData?.id;

      try {
        const response = await axios.get(url, {
          params: {
            accessKey,
            id: selectedId,
          },
        });

        console.log(`Response: ${selectedId}`, response.data);
      } catch (error) {
        console.error("Error:", error.message);
      } finally {
        console.log("Request completed.");
      }
    };

    getMediaDetails();
  }, [detailMediaData?.id]);

  const handleMediaTypeInput = (inputValue: any) => {
    if (inputValue?.type === "image/jpeg") {
      setMediaType("image");
    } else if (inputValue?.type === "video/mp4") {
      setMediaType("video");
    }
  };

  return createPortal(
    <Modal
      tabIndex={-1}
      aria-hidden="true"
      dialogClassName="modal-dialog modal-dialog-centered mw-900px"
      show={show}
      onHide={handleClose}
      backdrop={true}
    >
      <div className="modal-header">
        <h2>Edit Media</h2>

        {serverResponse && (
          <div
            className="message"
            style={{
              color: "green",
              textAlign: "center",
              fontSize: "1.2em",
              fontFamily: "bold",
            }}
          >
            {serverResponse}
          </div>
        )}

        {/* begin::Close */}
        <div
          className="btn btn-sm btn-icon btn-active-color-primary"
          onClick={handleClose}
        >
          <KTIcon className="fs-1" iconName="cross" />
        </div>
        {/* end::Close */}
      </div>

      <div className="modal-body py-lg-10 px-lg-10">
        {/*begin::Form Group */}
        <div className="d-flex  flex-wrap flex-row justify-content-between align-items-start">
          {/* begin::Input group */}
          <div className="fv-row mb-7">
            {/* begin::Label */}
            {/* end::Label */}

            {/* begin::Image input */}
            <div className="image-input image-input-outline">
              {/* begin::Preview existing avatar */}
              <div
                // className="image-input-wrapper w-250px"
                // style={{
                //   backgroundImage: `url('${imageURL}')`,
                // }}
                style={{
                  boxShadow: "0.3rem 0 0.5rem gray",
                  width: "250px",
                  height: "150px",
                  padding: "3px",
                }}
              >
                {mediaType === "video" ? (
                  <video
                    src={imageURL ? imageURL : ""}
                    width={"100%"}
                    height={"100%"}
                    controls
                  ></video>
                ) : mediaType === "image" ? (
                  <img
                    src={imageURL ? imageURL : ""}
                    width={"100%"}
                    height={"100%"}
                  ></img>
                ) : null}
              </div>
              {/* end::Preview existing avatar */}

              <div className="d-flex flex-end pt-5">
                {editMedia && (
                  <input
                    type="file"
                    onChange={(e: any) => {
                      handleMediaTypeInput(e.target.files[0]);
                      setMediaFile(e.target.files[0]); //e.target.files[0]
                      setImageURL(URL.createObjectURL(e?.target?.files[0]));
                    }}
                  />
                )}

                {/* <button
                  type="button"
                  className="btn btn-secondary"
                  // onClick={submit}
                  //   onClick={handleSubmitForm}
                >
                  Upload Media
                  <KTIcon iconName="add-files" className="fs-3 ms-2 me-0" />
                </button> */}
              </div>
            </div>

            {editMedia && (
              <div className="form-text">
                Allowed file types: png, jpg, jpeg.
              </div>
            )}

            {!editMedia && (
              <div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setEditMedia(true)}
                  //   onClick={handleSubmitForm}
                >
                  Change Media
                  {/* <KTIcon iconName="add-files" className="fs-3 ms-2 me-0" /> */}
                </button>
              </div>
            )}
            {/* end::Image input */}
          </div>
          {/* end::Input group */}

          {/* <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span>Media Id</span> */}
          {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Media Title."
              ></i> */}
          {/* </label> */}
          {/* <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              // name="config1"
              value={mediaId}
              readOnly
            /> */}

          {/* <span className="fw-bolder fs-5 text-gray-500">{mediaId}</span> */}
          {/* {mediaTitle.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Media Title is Required.</div>
              </div>
            )} */}
          {/* </div> */}

          <div className=" fv-row mb-3 w-100 d-flex justify-content-sm-between gap-3">
            <div className="w-25">
              <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
                <span>Media Id</span>
              </label>
            </div>
            <div className="w-75">
              <span className="fw-bolder fs-5 text-gray-500">{mediaId}</span>
            </div>
          </div>

          <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Media Title</span>
              {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Media Title."
              ></i> */}
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="config1"
              value={mediaTitle}
              onChange={(event) => {
                setMediaTitle(event.target.value);
              }}
            />
            {mediaTitle.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Media Title is Required.</div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-2 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Media Tags</span>
              {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Media Description."
              ></i> */}
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="config1"
              value={mediaDescription}
              onChange={(event) => {
                setMediaDescription(event.target.value);
              }}
            />
            {mediaDescription.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Media Tags is Required.</div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-3 w-100 d-flex justify-content-sm-between gap-3">
            <div className="w-25">
              <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
                <span>Media Type</span>
              </label>
            </div>
            <div className="w-75">
              <span className="fw-bolder fs-5 text-gray-500">{mediaType}</span>
            </div>
          </div>

          {/* <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span>Media Type</span> */}
          {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Media Title."
              ></i> */}
          {/* </label> */}
          {/* <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              // name="config1"
              value={mediaType}
              readOnly
            /> */}
          {/* <span className="fw-bolder fs-5 text-gray-500">{mediaType}</span> */}
          {/* {mediaTitle.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Media Title is Required.</div>
              </div>
            )} */}
          {/* </div> */}

          <div className=" fv-row mb-2 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Media Channel</span>
              {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Media Channel."
              ></i> */}
            </label>
            <select
              className="form-select form-select-solid form-select-lg"
              data-hide-search="true"
              value={mediaChannel}
              onChange={(e) => setMediaChannel(e.target.value)}
            >
              <option value="whatsApp">WhatsApp</option>
              <option value="telegram">Telegram</option>
              <option value="instagram">Instagram</option>
              <option value="messenger">Messenger</option>
            </select>
          </div>
        </div>

        <div className=" fv-row mb-3 w-100 d-flex justify-content-sm-between gap-3">
          <div className="w-25">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span>Media Upload Date</span>
            </label>
          </div>
          <div className="w-75">
            <span className="fw-bolder fs-5 text-gray-500">
              {createdDatetime}
            </span>
          </div>
        </div>

        {/* <div className=" fv-row mb-3 w-100 ">
          <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
            <span>Media Upload Date</span> */}
        {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Media Title."
              ></i> */}
        {/* </label> */}
        {/* <input
            type="text"
            className="form-control form-control-lg form-control-solid"
            // name="config1"
            value={createdDatetime}
            readOnly
          /> */}

        {/* <span className="fw-bolder fs-5 text-gray-500">
            {createdDatetime}
          </span> */}

        {/* {mediaTitle.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Media Title is Required.</div>
              </div>
            )} */}
        {/* </div> */}

        <div className=" fv-row mb-3 w-100 d-flex justify-content-sm-between gap-3">
          <div className="w-25">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span>Media Last Modified</span>
            </label>
          </div>
          <div className="w-75">
            <span className="fw-bolder fs-5 text-gray-500">
              {modifiedDatetime}
            </span>
          </div>
        </div>

        {/* <div className=" fv-row mb-3 w-100 ">
          <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
            <span>Media Last Modified</span> */}
        {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Media Title."
              ></i> */}
        {/* </label> */}
        {/* <input
            type="text"
            className="form-control form-control-lg form-control-solid"
            // name="config1"
            value={modifiedDatetime}
            readOnly
          /> */}

        {/* <span className="fw-bolder fs-5 text-gray-500">
            {modifiedDatetime}
          </span> */}

        {/* {mediaTitle.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Media Title is Required.</div>
              </div>
            )} */}
        {/* </div> */}

        <div className=" fv-row mb-3 w-100 ">
          <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
            <span className="required">Media URL</span>
            {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Media Title."
              ></i> */}
          </label>
          <input
            type="text"
            className="form-control form-control-lg form-control-solid"
            // name="config1"
            value={imageURL ? imageURL : ""}
            onChange={(event) => {
              setImageURL(event.target.value);
            }}
          />
          {/* {mediaTitle.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Media Title is Required.</div>
              </div>
            )} */}
        </div>

        {/*end::Form Group */}
      </div>

      <div className="d-flex flex-end py-3 px-8 gap-3">
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          onClick={handleSubmitForm}
        >
          Submit
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>

        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          onClick={deleteModalOpen}
        >
          Delete
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>

        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          onClick={handleClose}
        >
          Cancel
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>
      </div>
    </Modal>,
    modalsRoot
  );
};

export default EditMediaModal;
