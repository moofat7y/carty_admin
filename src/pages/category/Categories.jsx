import React from "react";
import CategoryTable from "../../components/category/CategoryTable";
import Modal from "../../components/ui/modals/Modal";
import AddCategory from "../../components/category/AddCategory";
// ----------------

export default function Categories() {
  const [openModal, setOpenModal] = React.useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <section className="py-3">
      <div className="container">
        <div className="add-cat">
          <button
            onClick={() => setOpenModal(true)}
            className="block mr-auto text-center py-2 rounded-md bg-primary-300 px-3 text-sm font-semibold leading-6 text-primary-900 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            إضافة تصنيف جديد
          </button>
          <Modal
            open={openModal}
            onClose={closeModal}
            title={"اضافة تصنيف جديد"}
          >
            <AddCategory close={() => setOpenModal(false)} />
          </Modal>
        </div>
        <CategoryTable />
      </div>
    </section>
  );
}
