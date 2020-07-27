const router = require("express").Router();

const mongoose = require("mongoose");
const ValidateAgentRegister = require("../Validations/RegisterValidationAgents");
const ValidateUserRegister = require("../Validations/RegisterValidationUser");
const bcrypt = require("bcryptjs");
const AdminModel = require("../Models/AdminModel");
const gorupmodel = require("../Models/GroupsModel");
const LoginValidation = require("../Validations/LoginValidation");
const jwt = require("jsonwebtoken");
const passport = require("passport");

//  Authenticated User Route
router.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.json({
      id: req.user.id,
      username: req.user.username,
      type: req.user.type,
    });
  }
);

//   Get Users Route
router.get("/users", (req, res) => {
  AdminModel.find({ type: "user" })
    .then((response) => res.json(response))
    .catch((err) => console.log(err + err.code));
});

//  Admin Update Route
router.post("/update/admin/:id", (req, res) => {
  AdminModel.findByIdAndUpdate(req.params.id).then((admin) => {
    admin.username = req.body.username;
    admin.password = req.body.password;
    bcrypt.hash(admin.password, 10, (err, hash) => {
      if (err) console.error("Error" + err);
      else {
        admin.password = hash;
        const added = admin.save();
        added.then(() => {
          res.json({
            mesg: "Updated Successfully",
          });
        });
      }
    });
  });
});

// USer Update Route
router.post("/update/user/:id", (req, res) => {
  AdminModel.findByIdAndUpdate(req.params.id)
    .then((user) => {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.cnic = req.body.cnic;
      user.mobileNo = req.body.mobileNo;
      user.address = req.body.address;
      user.district = req.body.district;
      user.tehsil = req.body.tehsil;
      user.email = req.body.email;
      user.username = req.body.username;
      user.province = req.body.province;
      user.cancreateAgent = req.body.cancreateAgrent;
      user.canmodifyAgent = req.body.canmodifyAgent;
      user.canactivateAgent = req.body.canactivateAgent;
      user.candeactivateAgent = req.body.candeactivateAgent;
      user.candeleteAgent = req.body.candeleteAgent;
      user.canviewAgentsDealHistory = req.body.canviewAgentsDealHistory;
      user.canapproveGroup = req.body.canapproveGroup;
      user.canrejectGroup = req.body.canrejectGroup;
      user.canapproveDemand = req.body.canapproveDemand;
      user.canrejectDemand = req.body.canrejectDemand;
      user.canviewSubscriptions = req.body.canviewSubscriptions;
      user.canfindGroup = req.body.canfindGroup;
      user.cancreatePayment = req.body.cancreatePayment;
      user.password = req.body.password;
      user.password_confirm = req.body.password_confirm;
      bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) console.error("Error" + err);
        else {
          user.password = hash;
          const added = user.save();
          added.then(() => {
            res.json({
              mesg: "Updated Successfuly",
            });
          });
        }
      });
    })
    .catch((err) => res.status(400).json("Error" + err));
});

// Get All Agents Route
router.get("/agents", (req, res) => {
  AdminModel.find({ type: "agent" })
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json("Error" + err));
});

// Update Agent Route
router.post("/update/agent/:id", (req, res) => {
  AdminModel.findByIdAndUpdate(req.params.id).then((agent) => {
    agent.firstName = req.body.firstName;
    agent.lastName = req.body.lastName;
    agent.companyName = req.body.companyName;
    agent.licenseNo = req.body.licenseNo;
    agent.cnic = req.body.cnic;
    agent.iataVerify = req.body.iataVerify;
    agent.iataNo = req.body.iataNo;
    agent.companyEmail = req.body.companyEmail;
    agent.telNo = req.body.telNo;
    agent.mobileNo = req.body.mobileNo;
    agent.whatsApp = req.body.whatsApp;
    agent.address = req.body.address;
    agent.district = req.body.district;
    agent.tehsil = req.body.tehsil;
    agent.province = req.body.province;
    agent.email = req.body.email;
    agent.username = req.body.username;
    agent.password = req.body.password;
    agent.password_confirm = req.body.password_confirm;
    bcrypt.hash(agent.password, 10, (err, hash) => {
      if (err) console.log(err);
      else {
        agent.password = hash;
        const added = agent.save();
        added.then(() => {
          res.json({
            mesg: "Updated Successfully",
          });
        });
      }
    });
  });
});

// Delete Route
router.delete("/:id", (req, res) => {
  AdminModel.findByIdAndDelete(req.params.id)
    .then(() => res.json({ mesg: "Deleted Successfully" }))
    .catch((err) => res.status(400).json("Error" + err));
});

// Admin register Route
router.post("/admin/register", (req, res) => {
  const { username, password } = req.body;

  const userAdmin = new AdminModel({
    username,
    password,
    type: "admin",
  });
  bcrypt.hash(userAdmin.password, 10, (err, hash) => {
    if (err) console.error("Error" + err);
    else {
      userAdmin.password = hash;
      const added = userAdmin.save();
      added.then(() => {
        res.json({
          Done: true,
        });
      });
    }
  });
});

// Agent Register Route
router.post("/agent/register", (req, res) => {
  const { errors, isValid } = ValidateAgentRegister(req.body);
  console.log(isValid);

  if (!isValid) return res.status(400).json(errors);

  AdminModel.findOne({
    username: req.body.username,
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        username: "User Name already exists",
      });
    } else {
      const {
        firstName,
        lastName,
        companyName,
        licenseNo,
        cnic,
        iataVerify,
        iataNo,
        companyEmail,
        telNo,
        mobileNo,
        whatsApp,
        address,
        district,
        tehsil,
        email,
        username,
        password,
        password_confirm,
        province,
      } = req.body;
      const agent = new AdminModel({
        firstName,
        lastName,
        companyName,
        licenseNo,
        cnic,
        iataVerify,
        iataNo,
        companyEmail,
        telNo,
        mobileNo,
        whatsApp,
        address,
        district,
        tehsil,
        province,
        email,
        username,
        password,
        password_confirm,
        type: "agent",
      });
      bcrypt.hash(agent.password, 10, (err, hash) => {
        if (err) console.error("Error" + err);
        else {
          agent.password = hash;
          const added = agent.save();
          added.then(() => {
            res.json({
              Done: true,
            });
          });
        }
      });
    }
  });
});

// User register Route
router.post("/user/register", (req, res) => {
  const { errors, isValid } = ValidateUserRegister(req.body);
  console.log(isValid);

  if (!isValid) return res.status(400).json(errors);

  AdminModel.findOne({
    username: req.body.username,
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        username: "User Name already exists",
      });
    } else {
      const {
        firstName,
        lastName,
        cnic,
        mobileNo,
        address,
        district,
        tehsil,
        email,
        username,
        password,
        password_confirm,
        province,
        cancreateAgent,
        canmodifyAgent,
        canactivateAgent,
        candeactivateAgent,
        candeleteAgent,
        canviewAgentsDealHistory,
        canapproveGroup,
        canrejectGroup,
        canapproveDemand,
        canrejectDemand,
        canviewSubscriptions,
        canfindGroup,
        cancreatePayment,
      } = req.body;
      const User = new AdminModel({
        firstName,
        lastName,
        cnic,
        mobileNo,
        address,
        district,
        tehsil,
        province,
        email,
        username,
        password,
        password_confirm,
        cancreateAgent,
        canmodifyAgent,
        canactivateAgent,
        candeactivateAgent,
        candeleteAgent,
        canviewAgentsDealHistory,
        canapproveGroup,
        canrejectGroup,
        canapproveDemand,
        canrejectDemand,
        canviewSubscriptions,
        canfindGroup,
        cancreatePayment,
        type: "user",
      });
      bcrypt.hash(User.password, 10, (err, hash) => {
        if (err) console.error("Error" + err);
        else {
          User.password = hash;
          const added = User.save();
          added.then(() => {
            res.json({
              Done: true,
            });
          });
        }
      });
    }
  });
});

//  Login Route
router.post("/login", (req, res) => {
  const { errors, isValid } = LoginValidation(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const username = req.body.username;
  const password = req.body.password;

  AdminModel.findOne({ username }).then((user) => {
    if (!user) {
      errors.username = "User not found";
      return res.status(404).json(errors);
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          type: user.type,
        };
        jwt.sign(
          payload,
          "jahangir",
          {
            expiresIn: 3600,
          },
          (err, token) => {
            if (err) console.log("Error :" + err);
            else {
              res.json({
                success: true,
                token: `Bearer ${token}`,
              });
            }
          }
        );
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

// groups post route
router.post("/group/upload", (req, res) => {
  const {
    tourType,
    via_Direct,
    flight,
    oneway_return,
    booked_ticketed,
    adult,
    child,
    infants,
    refundable_nonRefundable,
    priceAdults,
    priceChilds,
    priceInfants,
    totalPrice,
    installments,
    firstInstall,
    secondInstall,
    expiryTime,
    CRS,
    airline,
    onwayfrom,
    onwayto,
    returnOnwards,
    returnDate,
    agentId,
  } = req.body;
  const newGroup = new gorupmodel({
    tourType,
    via_Direct,
    flight,
    oneway_return,
    booked_ticketed,
    adult,
    child,
    infants,
    refundable_nonRefundable,
    priceAdults,
    priceChilds,
    priceInfants,
    totalPrice,
    installments,
    firstInstall,
    secondInstall,
    expiryTime,
    CRS,
    airline,
    onwayfrom,
    onwayto,
    returnOnwards,
    returnDate,
    agentId,
  });
  newGroup
    .save()
    .then(() => res.json({ mest: "Created Successfully" }))
    .catch((err) => res.status(400).json("Error" + err));
});
// groups get route

router.get("/groups", (req, res) => {
  gorupmodel
    .find()
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json("error" + err));
});

module.exports = router;
