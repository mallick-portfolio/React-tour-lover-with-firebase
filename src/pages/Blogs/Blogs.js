import React from "react";
const Blogs = () => {
  return (
    <div className="container my-5">
      <div className="border-2 px-5 py-3 my-5 shadow rounded-lg">
        <h4 className="text-2xl font-semibold ">
          Difference between authorization and authentication?
        </h4>
        <h5>Authentication</h5>
        <p>
          (1)Authentication is the process of identifying a user to provide
          access to a system. (2)In this, the user or client and server are
          verified. (3)It is usually performed before the authorization. (4)It
          requires the login details of the user, such as user name & password.
          (5)Authentication credentials can be partially changed by the user as
          per the requirement.
        </p>
        <h5>Authorization</h5>
        <p>
          (1)Authorization is the process of giving permission to access the
          resources. (2)In this, it is verified that if the user is allowed
          through the defined policies and rules. (3)It is usually done once the
          user is successfully authenticated. (4)It requires the user's
          privilege or security level. (5)Authorization permissions cannot be
          changed by the user.
        </p>
      </div>
      <div className="border-2 px-5 pb-3 mb-5 shadow rounded-lg">
        <h4 className="text-2xl font-semibold">Why are you using firebase?</h4>
        <p>
          Firebase can be seen as a server-less backend for your mobile apps,
          web apps, etc. It is a service provided by Google. As an Android
          developer I use Firebase in most of my projects. It has many features
          like Realtime database, Cloud functions, Analytics, Crashlytics,Cloud
          Firestore,etc.
        </p>
      </div>
      <div className="border-2 px-5 pb-3 shadow rounded-lg">
        <h4 className="text-2xl font-semibold">
          What other options do you have to implement authentication?
        </h4>
        <div>
          <p className="font-semibold">Inline</p>
          <p>
            Usually, authentication by a server entails the use of a user name
            and password. Other ways to authenticate can be through cards,
            retina scans, voice recognition, and fingerprints.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">
            What other services does firebase provide other than authentication?
          </h4>
          <p>
            Firebase is originally developed by Firebase inc and later acquired
            by Google. It provides different kinds of services that help you to
            develop high-quality mobile and web applications to grow your
            business. It is compatible with Web, iOS, Android, and OS X clients.
          </p>
          <p className="font-semibold">
            There are many services which Firebase provides, Most useful of them
            are: Cloud Firestore
          </p>
          <p>
            Cloud Functions Hosting Cloud Storage Google Analytics Predictions
            Cloud Messaging Dynamic Links Remote Config
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
