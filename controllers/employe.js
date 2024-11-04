import express from "express";

const allEmploye = (req, res) => {
  res.send("All Employes");
};

const createEmploye = (req, res) => {
  res.send("Create Employe Profile");
};

const updateEmploye = (req, res) => {
  res.send("Update Employe Profile");
};

const deleteEmploye = (req, res) => {
  res.send("Delete Employe Profile");
};

export { allEmploye, createEmploye, updateEmploye, deleteEmploye };
