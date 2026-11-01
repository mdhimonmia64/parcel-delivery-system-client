
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaSearch, FaUserCheck } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const DeactivatedRiders = () => {
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState("");

  // Load Deactivated Riders
  const {
    data: riders = [],
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["deactivatedRiders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders/deactivated");
      return res.data;
    },
  });

  // Activate Rider
  const handleActivate = async (id) => {
    const confirm = await Swal.fire({
      title: "Activate this rider?",
      text: "This rider will be moved to the active riders list.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, activate",
      cancelButtonText: "Cancel",
    });

    if (!confirm.isConfirmed) return;

    try {
      await axiosSecure.patch(`/riders/${id}/status`, {
        status: "active",
      });

      Swal.fire(
        "Activated!",
        "Rider has been activated successfully.",
        "success"
      );

      refetch();
    } catch (error) {
      console.error(error);

      Swal.fire(
        "Error",
        "Failed to activate rider.",
        "error"
      );
    }
  };

  // Search Filter
  const filteredRiders = riders.filter((rider) =>
    rider.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Deactivated Riders
      </h2>

      {/* Search Field */}
      <div className="mb-4 flex items-center gap-2">
        <FaSearch />

        <input
          type="text"
          placeholder="Search by name"
          className="input input-bordered w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Loading / Error */}
      {isLoading && (
        <p className="text-center">
          Loading deactivated riders...
        </p>
      )}

      {error && (
        <p className="text-center text-red-500">
          Failed to load deactivated riders.
        </p>
      )}

      {/* Rider Table */}
      {!isLoading && !error && (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Region</th>
                <th>District</th>
                <th>Bike</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredRiders.map((rider) => (
                <tr key={rider._id}>
                  <td>{rider.name}</td>
                  <td>{rider.email}</td>
                  <td>{rider.phone}</td>
                  <td>{rider.region}</td>
                  <td>{rider.district}</td>

                  <td>
                    {rider.bike_brand} -{" "}
                    {rider.bike_registration}
                  </td>

                  <td>
                    <span className="badge badge-error text-white">
                      Deactivated
                    </span>
                  </td>

                  <td>
                    <button
                      onClick={() => handleActivate(rider._id)}
                      className="btn btn-sm btn-success"
                    >
                      <FaUserCheck className="mr-1" />
                      Activate
                    </button>
                  </td>
                </tr>
              ))}

              {filteredRiders.length === 0 && (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center text-gray-500"
                  >
                    No deactivated riders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DeactivatedRiders;
