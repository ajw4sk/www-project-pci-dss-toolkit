import { sendViolationEmail } from '../../src/services/emailService';
import nodemailer from 'nodemailer';

jest.mock('nodemailer');

const sendMailMock = jest.fn();
(nodemailer.createTransport as jest.Mock).mockReturnValue({
  sendMail: sendMailMock,
});

describe('Email Notification Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should send an email when triggered', async () => {
    sendMailMock.mockResolvedValueOnce({ accepted: ['test@example.com'] });

    const result = await sendViolationEmail('test@example.com', 'Test Violation', 'Something went wrong');

    expect(sendMailMock).toHaveBeenCalledTimes(1);
    expect(sendMailMock).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'test@example.com',
        subject: 'PCI DSS Violation Alert: Test Violation',
        text: expect.stringContaining('Something went wrong'),
      })
    );

    expect(result.accepted).toContain('test@example.com');
  });

  it('should handle email sending errors gracefully', async () => {
    sendMailMock.mockRejectedValueOnce(new Error('SMTP error'));

    await expect(
      sendViolationEmail('fail@example.com', 'Fail Alert', 'Should fail')
    ).rejects.toThrow('SMTP error');
  });
});
