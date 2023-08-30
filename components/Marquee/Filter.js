// import * as React from "react";
import Switch from "@mui/material/Switch";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { RiArrowDownSLine } from "react-icons/ri";
export default function Filter() {
  return (
    <div className="relative z-[-1]">
      {/* ========= range ======== */}
      <div className="flex justify-between items-center">
        <label htmlFor="range" className="text-[16px] font-[500]">
          Show Range
        </label>
        <Switch defaultChecked color="default" id="range" />
      </div>

      {/* =========== Budget ============ */}
      <div className="">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<RiArrowDownSLine className="w-5 h-5" />}
            aria-controls="Budget"
            id="Budget"
          >
            <Typography>Budget (per person)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup className="grid grid-cols-2 grid-rows-3">
              <FormControlLabel control={<Checkbox />} label="0-1400" />
              <FormControlLabel control={<Checkbox />} label="1401-1800" />
              <FormControlLabel control={<Checkbox />} label="1801-2400" />
              <FormControlLabel control={<Checkbox />} label="2400-3500" />
              <FormControlLabel control={<Checkbox />} label="3501-4500" />
              <FormControlLabel control={<Checkbox />} label="4500+" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* ============== parking ============== */}
      <div className="flex justify-between items-center">
        <label htmlFor="Parking" className="text-[16px] font-[500]">
          Parking Space
        </label>
        <Switch defaultChecked color="default" id="Parking" />
      </div>

      {/* =============== wheelChair =========== */}
      <div className="flex justify-between items-center">
        <label htmlFor="WheelChair" className="text-[16px] font-[500]">
          WheelChair Acessible
        </label>
        <Switch defaultChecked color="default" id="WheelChair" />
      </div>

      {/* ============= type ========== */}
      <div className="">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<RiArrowDownSLine className="w-5 h-5" />}
            aria-controls="Type"
            id="Type"
          >
            <Typography>Type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup className="grid grid-cols-2 grid-rows-2">
              <FormControlLabel control={<Checkbox />} label="Hall" />
              <FormControlLabel control={<Checkbox />} label="Outdoor" />
              <FormControlLabel
                control={<Checkbox />}
                label="Marquee/ Banquet"
              />
              <FormControlLabel control={<Checkbox />} label="Other" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* ================== capacity ================ */}
      <div className="">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<RiArrowDownSLine className="w-5 h-5" />}
            aria-controls="Capacity"
            id="Capacity"
          >
            <Typography>Capacity</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup className="grid grid-cols-2 grid-rows-3">
              <FormControlLabel control={<Checkbox />} label="0-100" />
              <FormControlLabel control={<Checkbox />} label="101-300" />
              <FormControlLabel control={<Checkbox />} label="301-600" />
              <FormControlLabel control={<Checkbox />} label="601-1000" />
              <FormControlLabel control={<Checkbox />} label="1001-1500" />
              <FormControlLabel control={<Checkbox />} label="1500+" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* ====================== staff =============== */}
      <div className="">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<RiArrowDownSLine className="w-5 h-5" />}
            aria-controls="Staff"
            id="Staff"
          >
            <Typography>Staff</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup className="grid grid-cols-2 grid-rows-2">
              <FormControlLabel control={<Checkbox />} label="Male" />
              <FormControlLabel control={<Checkbox />} label="Female" />
              <FormControlLabel control={<Checkbox />} label="Transgender" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* ================= cancellation =============== */}
      <div className="">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<RiArrowDownSLine className="w-5 h-5" />}
            aria-controls="Cancellation"
            id="Cancellation"
          >
            <Typography>Cancellation Policy</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup className="grid grid-cols-2 grid-rows-2">
              <FormControlLabel control={<Checkbox />} label="Refundable" />
              <FormControlLabel
                control={<Checkbox />}
                label="Partially-refundable"
              />
              <FormControlLabel control={<Checkbox />} label="Non-Refundable" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
