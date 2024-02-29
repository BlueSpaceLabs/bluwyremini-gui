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
import useStaticData from "../../../../StaticData";
// import { StepperComponent } from "../../../../../_metronic/assets/ts/components";

// type Props = {
//   show: boolean;
//   handleClose: () => void;
// };

const modalsRoot = document.getElementById("root-modals") || document.body;

const blankImg = toAbsoluteUrl("media/svg/avatars/blank.svg");

const accessKey =
  "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm";

const AddMediaModal = ({
  show,
  handleClose,
  setData,
  serverResponse,
  setServerResponse,
  setSnackbar,
}: any) => {
  const { baseUrl } = useStaticData();

  const [mediaTitle, setMediaTitle] = React.useState<string>("");
  const [mediaDescription, setMediaDescription] = React.useState<string>("");
  const [mediaChannel, setMediaChannel] = React.useState<string>("whatsApp");
  const [mediaFile, setMediaFile] = React.useState<string>(blankImg);
  const [formError, setFormError] = React.useState<boolean>(false);
  const [tenant, setTenant] = React.useState<string>("bsl");
  const [imageURL, setImageURL] = React.useState<string | null>(blankImg);

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
      // console.log(mediaFile)
      formData.append("avatar", mediaFile);
      formData.append("mediaTitle", mediaTitle);
      formData.append("mediaDescription", mediaDescription);
      formData.append("mediaChannel", mediaChannel);
      formData.append("accessKey", accessKey);
      formData.append("tenant", tenant);

      try {
        const url = `${baseUrl}/addMediaDetails.php`;

        let response = axios
          .post(url, formData, {
            headers: {
              "content-type": "multipart/form-data",
            },
          })
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
                : "Successfully Added Media !",
            });
            handleClose();

            return response;
          });

        //console.log(res)
      } catch (error) {
        console.error(error);

        setSnackbar({
          showSnackbar: true,
          severitySnackBar: "error",
          messageSnackBar: error?.response?.data?.message
            ? error?.response?.data?.message
            : "Failed to Add Media !",
        });
      }
    } //else
  }; //fn ends

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
        <h2>Add Media</h2>

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
                className="image-input-wrapper w-125px h-125px"
                style={{
                  backgroundImage: `url('${imageURL}')`,
                }}
              ></div>
              {/* end::Preview existing avatar */}

              <div className="d-flex flex-end pt-5">
                <input
                  type="file"
                  onChange={(e: any) => {
                    setMediaFile(e.target.files[0]); //e.target.files[0]
                    setImageURL(URL.createObjectURL(e?.target?.files[0]));
                  }}
                />

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
            <div className="form-text">Allowed file types: png, jpg, jpeg.</div>
            {/* end::Image input */}
          </div>
          {/* end::Input group */}

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
              <span className="required">Media Description</span>
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
                <div className="fv-help-block">
                  Media Description is Required.
                </div>
              </div>
            )}
          </div>

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

        {/*end::Form Group */}
      </div>

      <div className="d-flex flex-end py-3 px-8">
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          onClick={handleSubmitForm}
        >
          Submit
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>
      </div>
    </Modal>,
    modalsRoot
  );
};

export default AddMediaModal;
