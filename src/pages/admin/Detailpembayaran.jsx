import { useState, useEffect } from "react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AxiosInterceptors from "../utils/AxiosInterceptors";

const Detailpembayaran = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { state } = useLocation();
    const payment = state?.payment;
    const [saveButtonColor, setSaveButtonColor] = useState("#B6BDBF");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [paymentsData, setPaymentsData] = useState([]); // Deklarasikan state untuk data pembayaran

    if (!payment) {
        return <div>Data pembayaran tidak ditemukan!</div>;
    }

    // Fungsi untuk mengambil data dari API
    const getData = async () => {
        setLoading(true);
        setError(null); // Reset error sebelum memulai request
        try {
            const result = await AxiosInterceptors.get("/api/v1/payment");
            console.log("Respons Data API:", result.data); // Log respons API
            setPaymentsData(result.data.data || []); // Simpan data ke state
        } catch (error) {
            console.error("Error fetching data:", error.response || error); // Log error
            setError(
                error.response?.data?.message || "Terjadi kesalahan saat memuat data."
            );
        } finally {
            setLoading(false); // Hentikan loading
        }
    };

    // Ambil data saat komponen pertama kali dimuat
    useEffect(() => {
        getData();
    }, []);

    const updateData = async () => {
        setLoading(true);
        setError(null); // Reset error sebelum memulai request
        try {
            const payload = {
                status,
            };
    
            const result = await AxiosInterceptors.put(`/api/v1/payment/${payment.id}`, payload);
            console.log("Respons Update API:", result.data); // Log respons API
            alert("Status pembayaran berhasil diperbarui!");

            console.log("Navigasi akan dijalankan sekarang.");
            navigate("/kelolapembayaran");
        } catch (error) {
            console.error("Error updating data:", error.response || error); // Log error
            setError(
                error.response?.data?.message || "Terjadi kesalahan saat memperbarui data."
            );
            alert("Gagal memperbarui status pembayaran!");
        } finally {
            setLoading(false); // Hentikan loading
        }
    };
    
    // Fungsi dipanggil saat menyimpan perubahan
    const handleSave = () => {
        if (status !== "pending") {
            updateData();
        } else {
            alert("Status pembayaran belum diubah!");
        }
    };

    const [status, setStatus] = useState("pending");

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };

    const getButtonStyle = (buttonstatus) => {
        if (buttonstatus === status) {
            switch (buttonstatus) {
                case "approved":
                    return { backgroundColor: "#42B862", color: "#ffff" };
                case "invalid":
                    return { backgroundColor: "#950101", color: "#ffff" };
                case "pending":
                default:
                    return {backgroundColor: "#FE0B0B", color: "#ffff" };
            }
        } else if (buttonstatus === "pending") {
            return { backgroundColor: "#B6BDBF" };
        }
        return { background: "#B6BDBF"};
    };

    useEffect(() => {
        if (status !== "pending") {
            setSaveButtonColor("#597545"); 
        } else {
            setSaveButtonColor("#B6BDBF"); 
        }
    }, [status]); 

    useEffect(() => {
        if (showPopup) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showPopup]);

    const openPopup = () => {
        if (status !== "pending") {
            setShowPopup(true);
        } else {
            setShowPopup(false);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    // const confirmAction = () => {
    //     console.log("Perubahan disimpan");
    //     closePopup();
    // }

    if (!payment) {
        return <div>Data pembayaran tidak ditemukan!</div>;
    }

    return (
        <>
        <div className="payment-detail">
                <div className="side-tools" style={{ marginTop: '-95rem', marginLeft: '14rem'}}>
                    <div className="text-side">Detail Pembayaran</div>
                </div>
        </div>
        
        <div className="text-proof-wrapper">
            <div className="text-proof">Bukti Pembayaran</div>
            <div className="image-proof">{payment.image ? (
                                            <img
                                                src={`http://localhost:5000/api/v1${payment.image}`}
                                                alt={`Bukti Pembayaran untuk Order ID ${payment.order_id}`}
                                                width="100"
                                            />
                                        ) : (
                                            <span>Tidak ada bukti</span>
                                        )}</div>
        </div>

        <div className="payment-detail-grid">
            <div className="grid-item">
                ID
                <div className="tab-detail">{payment.id}</div>
            </div>
            <div className="grid-item">
                Order ID
                <div className="tab-detail">{payment.order_id === null && <p style={{ fontFamily: "Poppins", fontSize: "16px", marginTop: '-6px'}}>-</p>}</div>
            </div>
            <div className="grid-item">
                Opsi Pembayaran
                <div className="tab-detail">{payment.option}</div>
            </div>
        </div>

        <div className="text-status-wrapper">
            <div className="text-status">Status Pembayaran</div>
                <div className="status-buttons">
                    <button 
                        className="pending-btn"
                        style={getButtonStyle("pending")}
                        onClick={() => handleStatusChange("pending")}
                    >
                        Pending
                    </button>
                    <button 
                        className="confirmed-btn"
                        style={getButtonStyle("approved")}
                        onClick={() => handleStatusChange("approved")}
                    >
                        Approved
                    </button>
                    <button 
                        className="invalid-btn"
                        style={getButtonStyle("invalid")}
                        onClick={() => handleStatusChange("invalid")}
                    >
                        Invalid
                    </button>
                </div>
        </div>

        <div className="action-buttons">
            <button className="btn-cancel-detail">CANCEL</button>
            <button 
                className="btn-save-detail"
                style={{ backgroundColor: saveButtonColor }}
                onClick={openPopup}
            >
                SAVE
            </button>
        </div>

        {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <p>Yakin ingin menyimpan perubahan?</p>
                        <div className="popup-buttons">
                            <button className="no-button" onClick={closePopup}>
                                TIDAK
                            </button>
                            <button className="yes-button" onClick={handleSave}>
                                YA
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Detailpembayaran;
