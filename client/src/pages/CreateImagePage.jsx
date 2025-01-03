import React from "react";
import GeneratedImage from "../components/GeneratedImage"
import Form from "../components/Form"

const CreateImagePage = () => {

    return (
        <div className="px-5 md:flex pb-10 gap-12 max-w-[100%] min-h-screen">
            <Form />
            <GeneratedImage />
        </div>
    )
}

export default CreateImagePage;