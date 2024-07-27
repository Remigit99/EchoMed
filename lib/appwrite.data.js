
import {Models} from "node-appwrite"
// Defining a function to create a Document object
function createDocument() {
  return {
    $id: '',
    $createdAt: '',
    $updatedAt: '',
    $permissions: []
  };
}

// Defining the Patient object
const Patient = {
  ...createDocument(),
  userId: '',
  name: '',
  email: '',
  phone: '',
  birthDate: null,
  gender: '',  // You may want to set default values or handle this differently
  address: '',
  occupation: '',
  emergencyContactName: '',
  emergencyContactNumber: '',
  primaryPhysician: '',
  insuranceProvider: '',
  insurancePolicyNumber: '',
  allergies: undefined,
  currentMedication: undefined,
  familyMedicalHistory: undefined,
  pastMedicalHistory: undefined,
  identificationType: undefined,
  identificationNumber: undefined,
  identificationDocument: undefined,
  privacyConsent: false
};

// Defining the Appointment object
const Appointment = {
  ...createDocument(),
  patient: Patient,
  schedule: null,
  status: '',  // You may want to set default values or handle this differently
  primaryPhysician: '',
  reason: '',
  note: '',
  userId: '',
  cancellationReason: null
};

module.exports = {
  Patient,
  Appointment
};
