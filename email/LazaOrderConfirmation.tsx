import React from 'react';

interface LazaOrderConfirmationProps {
    orderData: {
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        address: string;
        notes?: string;
        orderNumber: string;
        orderDate: string;
        items: Array<{
            name: string;
            quantity: number;
            price: number;
            modifiers?: Array<{ name: string; options: string }>;
            comments?: string;
        }>;
    };
}

const LazaOrderConfirmation: React.FC<LazaOrderConfirmationProps> = ({ orderData }) => {
    const subtotal = orderData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;

    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#f8f9fa',
            padding: '20px'
        }}>
            {/* Header with Logo and Background */}
            <div style={{
                background: 'linear-gradient(135deg, #1B3A6B 0%, #2C4B7E 100%)',
                borderRadius: '20px 20px 0 0',
                padding: '30px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative dessert images */}
                <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '80px',
                    height: '80px',
                    backgroundImage: 'url(/desserts/kunafa.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '50%',
                    opacity: '0.3'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    width: '60px',
                    height: '60px',
                    backgroundImage: 'url(/desserts/crepe.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '50%',
                    opacity: '0.3'
                }}></div>

                <img
                    src="/lazabluelogo.png"
                    alt="Laza Dessert Cafe"
                    style={{
                        width: '120px',
                        height: 'auto',
                        marginBottom: '15px'
                    }}
                />
                <h1 style={{
                    color: 'white',
                    margin: '0',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                    Order Confirmation
                </h1>
                <p style={{
                    color: 'rgba(255,255,255,0.9)',
                    margin: '10px 0 0 0',
                    fontSize: '16px'
                }}>
                    Thank you for choosing Laza Dessert Cafe!
                </p>
            </div>

            {/* Order Details */}
            <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '0 0 20px 20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
                {/* Order Info */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '30px',
                    padding: '20px',
                    backgroundColor: 'rgba(44, 75, 126, 0.05)',
                    borderRadius: '15px',
                    border: '1px solid rgba(44, 75, 126, 0.1)'
                }}>
                    <div>
                        <h3 style={{ color: '#1B3A6B', margin: '0 0 5px 0', fontSize: '18px' }}>Order Number</h3>
                        <p style={{ color: '#2C4B7E', margin: '0', fontSize: '16px', fontWeight: 'bold' }}>{orderData.orderNumber}</p>
                    </div>
                    <div>
                        <h3 style={{ color: '#1B3A6B', margin: '0 0 5px 0', fontSize: '18px' }}>Order Date</h3>
                        <p style={{ color: '#2C4B7E', margin: '0', fontSize: '16px' }}>{orderData.orderDate}</p>
                    </div>
                </div>

                {/* Customer Information */}
                <div style={{ marginBottom: '30px' }}>
                    <h2 style={{
                        color: '#1B3A6B',
                        margin: '0 0 20px 0',
                        fontSize: '22px',
                        borderBottom: '2px solid #2C4B7E',
                        paddingBottom: '10px'
                    }}>
                        Customer Information
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '20px'
                    }}>
                        <div>
                            <label style={{
                                display: 'block',
                                color: '#1B3A6B',
                                fontWeight: 'bold',
                                marginBottom: '5px',
                                fontSize: '14px'
                            }}>First Name</label>
                            <div style={{
                                padding: '12px',
                                backgroundColor: 'rgba(255, 255, 255, 0.20)',
                                borderRadius: '10px',
                                border: '1px solid rgba(44, 75, 126, 0.2)',
                                boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset'
                            }}>
                                {orderData.firstName}
                            </div>
                        </div>
                        <div>
                            <label style={{
                                display: 'block',
                                color: '#1B3A6B',
                                fontWeight: 'bold',
                                marginBottom: '5px',
                                fontSize: '14px'
                            }}>Last Name</label>
                            <div style={{
                                padding: '12px',
                                backgroundColor: 'rgba(255, 255, 255, 0.20)',
                                borderRadius: '10px',
                                border: '1px solid rgba(44, 75, 126, 0.2)',
                                boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset'
                            }}>
                                {orderData.lastName}
                            </div>
                        </div>
                        <div>
                            <label style={{
                                display: 'block',
                                color: '#1B3A6B',
                                fontWeight: 'bold',
                                marginBottom: '5px',
                                fontSize: '14px'
                            }}>Phone</label>
                            <div style={{
                                padding: '12px',
                                backgroundColor: 'rgba(255, 255, 255, 0.20)',
                                borderRadius: '10px',
                                border: '1px solid rgba(44, 75, 126, 0.2)',
                                boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset'
                            }}>
                                {orderData.phone}
                            </div>
                        </div>
                        <div>
                            <label style={{
                                display: 'block',
                                color: '#1B3A6B',
                                fontWeight: 'bold',
                                marginBottom: '5px',
                                fontSize: '14px'
                            }}>Email</label>
                            <div style={{
                                padding: '12px',
                                backgroundColor: 'rgba(255, 255, 255, 0.20)',
                                borderRadius: '10px',
                                border: '1px solid rgba(44, 75, 126, 0.2)',
                                boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset'
                            }}>
                                {orderData.email}
                            </div>
                        </div>
                        <div style={{ gridColumn: '1 / -1' }}>
                            <label style={{
                                display: 'block',
                                color: '#1B3A6B',
                                fontWeight: 'bold',
                                marginBottom: '5px',
                                fontSize: '14px'
                            }}>Address</label>
                            <div style={{
                                padding: '12px',
                                backgroundColor: 'rgba(255, 255, 255, 0.20)',
                                borderRadius: '10px',
                                border: '1px solid rgba(44, 75, 126, 0.2)',
                                boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset'
                            }}>
                                {orderData.address}
                            </div>
                        </div>
                        {orderData.notes && (
                            <div style={{ gridColumn: '1 / -1' }}>
                                <label style={{
                                    display: 'block',
                                    color: '#1B3A6B',
                                    fontWeight: 'bold',
                                    marginBottom: '5px',
                                    fontSize: '14px'
                                }}>Special Notes</label>
                                <div style={{
                                    padding: '12px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.20)',
                                    borderRadius: '10px',
                                    border: '1px solid rgba(44, 75, 126, 0.2)',
                                    boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset',
                                    minHeight: '60px'
                                }}>
                                    {orderData.notes}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Order Items */}
                <div style={{ marginBottom: '30px' }}>
                    <h2 style={{
                        color: '#1B3A6B',
                        margin: '0 0 20px 0',
                        fontSize: '22px',
                        borderBottom: '2px solid #2C4B7E',
                        paddingBottom: '10px'
                    }}>
                        Your Order
                    </h2>
                    {orderData.items.map((item, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '15px',
                            marginBottom: '10px',
                            backgroundColor: 'rgba(44, 75, 126, 0.05)',
                            borderRadius: '15px',
                            border: '1px solid rgba(44, 75, 126, 0.1)'
                        }}>
                            <div style={{ flex: 1 }}>
                                <h4 style={{
                                    color: '#1B3A6B',
                                    margin: '0 0 5px 0',
                                    fontSize: '16px',
                                    fontWeight: 'bold'
                                }}>
                                    {item.name} × {item.quantity}
                                </h4>
                                {item.modifiers && item.modifiers.length > 0 && (
                                    <p style={{
                                        color: '#2C4B7E',
                                        margin: '0 0 5px 0',
                                        fontSize: '14px',
                                        fontStyle: 'italic'
                                    }}>
                                        {item.modifiers.map(mod => `${mod.name}: ${mod.options}`).join(', ')}
                                    </p>
                                )}
                                {item.comments && (
                                    <p style={{
                                        color: '#666',
                                        margin: '0',
                                        fontSize: '13px',
                                        fontStyle: 'italic'
                                    }}>
                                        Note: {item.comments}
                                    </p>
                                )}
                            </div>
                            <div style={{
                                color: '#1B3A6B',
                                fontWeight: 'bold',
                                fontSize: '16px'
                            }}>
                                ${(item.price * item.quantity).toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div style={{
                    backgroundColor: 'rgba(44, 75, 126, 0.1)',
                    padding: '20px',
                    borderRadius: '15px',
                    border: '2px solid #2C4B7E'
                }}>
                    <h3 style={{
                        color: '#1B3A6B',
                        margin: '0 0 15px 0',
                        fontSize: '20px',
                        textAlign: 'center'
                    }}>
                        Order Summary
                    </h3>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '8px'
                    }}>
                        <span style={{ color: '#2C4B7E' }}>Subtotal:</span>
                        <span style={{ color: '#1B3A6B', fontWeight: 'bold' }}>${subtotal.toFixed(2)}</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '8px'
                    }}>
                        <span style={{ color: '#2C4B7E' }}>Tax (8%):</span>
                        <span style={{ color: '#1B3A6B', fontWeight: 'bold' }}>${tax.toFixed(2)}</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderTop: '2px solid #2C4B7E',
                        paddingTop: '8px',
                        marginTop: '8px'
                    }}>
                        <span style={{ color: '#1B3A6B', fontWeight: 'bold', fontSize: '18px' }}>Total:</span>
                        <span style={{ color: '#1B3A6B', fontWeight: 'bold', fontSize: '18px' }}>${total.toFixed(2)}</span>
                    </div>
                </div>

                {/* Footer */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '30px',
                    padding: '20px',
                    backgroundColor: 'rgba(44, 75, 126, 0.05)',
                    borderRadius: '15px'
                }}>
                    <p style={{
                        color: '#1B3A6B',
                        margin: '0 0 15px 0',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }}>
                        🎉 Your order is being prepared with love! 🎉
                    </p>
                    <p style={{
                        color: '#2C4B7E',
                        margin: '0 0 15px 0',
                        fontSize: '14px'
                    }}>
                        We'll notify you when your order is ready for pickup.
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        marginTop: '20px'
                    }}>
                        <img
                            src="/desserts/kunafa.jpg"
                            alt="Kunafa"
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }}
                        />
                        <img
                            src="/desserts/crepe.jpg"
                            alt="Crepe"
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }}
                        />
                        <img
                            src="/drinks/ferroshake.jpg"
                            alt="Ferro Shake"
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    <p style={{
                        color: '#666',
                        margin: '20px 0 0 0',
                        fontSize: '12px'
                    }}>
                        Thank you for choosing Laza Dessert Cafe! 🌟
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LazaOrderConfirmation; 