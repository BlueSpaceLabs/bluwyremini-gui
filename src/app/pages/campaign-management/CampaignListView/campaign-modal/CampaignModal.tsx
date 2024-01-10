import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { StepperComponent } from "../../../../../_metronic/assets/ts/components";
import { KTIcon } from "../../../../../_metronic/helpers";
import { Form, Formik, FormikValues } from "formik";
import {
  createAccountSchemas,
  ICreateAccount,
  inits,
} from "./CreateAccountWizardHelper";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { Step4 } from "./steps/Step4";
import { Step5 } from "./steps/Step5";

type Props = {
  show: boolean;
  handleClose: () => void;
};

const modalsRoot = document.getElementById("root-modals") || document.body;

const CampaignModal = ({ show, handleClose }: Props) => {
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const [stepper, setStepper] = useState<StepperComponent | null>(null);
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0]);
  const [initValues] = useState<ICreateAccount>(inits);
  const [isSubmitButton, setSubmitButton] = useState(false);

  const loadStepper = () => {
    setStepper(
      StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
    );
  };

  const prevStep = () => {
    if (!stepper) {
      return;
    }

    stepper.goPrev();

    setCurrentSchema(createAccountSchemas[stepper.currentStepIndex - 1]);

    setSubmitButton(stepper.currentStepIndex === stepper.totalStepsNumber);
  };

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper) {
      return;
    }

    if (stepper.currentStepIndex !== stepper.totalStepsNumber) {
      stepper.goNext();
    } else {
      stepper.goto(1);
      actions.resetForm();
    }

    setSubmitButton(stepper.currentStepIndex === stepper.totalStepsNumber);

    // console.log(values);

    setCurrentSchema(createAccountSchemas[stepper.currentStepIndex - 1]);
  };

  useEffect(() => {
    if (!stepperRef.current) {
      return;
    }

    loadStepper();
  }, [stepperRef]);

  return createPortal(
    <Modal
      id="kt_modal_create_app"
      tabIndex={-1}
      aria-hidden="true"
      dialogClassName="modal-dialog modal-dialog-centered mw-900px"
      show={show}
      onHide={handleClose}
      //   onEntered={loadStepper}
      backdrop={true}
    >
      <div className="modal-header">
        <h2>Create Campaign</h2>
        {/* begin::Close */}
        <div
          className="btn btn-sm btn-icon btn-active-color-primary"
          onClick={handleClose}
        >
          <KTIcon className="fs-1" iconName="cross" />
        </div>
        {/* end::Close */}
      </div>

      <div
        ref={stepperRef}
        className="stepper stepper-links d-flex flex-column pt-2"
        id="kt_create_account_stepper"
      >
        <div className="stepper-nav mb-5">
          <div className="stepper-item current" data-kt-stepper-element="nav">
            <h3 className="stepper-title">Setup Campaign</h3>
          </div>

          <div className="stepper-item" data-kt-stepper-element="nav">
            <h3 className="stepper-title">Campaign Details</h3>
          </div>

          <div className="stepper-item" data-kt-stepper-element="nav">
            <h3 className="stepper-title">Upload Files</h3>
          </div>

          <div className="stepper-item" data-kt-stepper-element="nav">
            <h3 className="stepper-title">Campaign Info</h3>
          </div>

          <div className="stepper-item" data-kt-stepper-element="nav">
            <h3 className="stepper-title">Trigger Campaign</h3>
          </div>
        </div>

        <Formik
          validationSchema={currentSchema}
          initialValues={initValues}
          onSubmit={submitStep}
        >
          {() => (
            <Form
              placeholder=""
              className="mx-auto mw-600px w-100 pt-15 pb-10"
              id="kt_create_account_form"
            >
              <div className="current" data-kt-stepper-element="content">
                <Step1 />
              </div>

              <div data-kt-stepper-element="content">
                <Step2 />
              </div>

              <div data-kt-stepper-element="content">
                <Step3 />
              </div>

              <div data-kt-stepper-element="content">
                <Step4 />
              </div>

              <div data-kt-stepper-element="content">
                <Step5 />
              </div>

              <div className="d-flex flex-stack pt-15">
                <div className="mr-2">
                  <button
                    onClick={prevStep}
                    type="button"
                    className="btn btn-lg btn-light-primary me-3"
                    data-kt-stepper-action="previous"
                  >
                    <KTIcon iconName="arrow-left" className="fs-4 me-1" />
                    Back
                  </button>
                </div>

                <div>
                  <button type="submit" className="btn btn-lg btn-primary me-3">
                    <span className="indicator-label">
                      {!isSubmitButton && "Continue"}
                      {isSubmitButton && "Submit"}
                      <KTIcon
                        iconName="arrow-right"
                        className="fs-3 ms-2 me-0"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>,
    modalsRoot
  );
};

export { CampaignModal };
