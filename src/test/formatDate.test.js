import { formatDate } from '../utils/dateFormat';

describe('formatDate', () => {
  it('formats the timestamp into the correct date format', () => {
    // Mock a timestamp for testing purposes (e.g., January 1, 2022, 12:30 PM)
    const timestamp = 1641040200000; // This timestamp corresponds to January 1, 2022, 12:30 PM UTC

    // Mock the expected formatted date
    const expectedFormattedDate = 'Sat, Jan 1, 7:30 AM';

    // Call the formatDate function with the mock timestamp
    const formattedDate = formatDate(timestamp);

    // Assert that the formatted date matches the expected formatted date
    expect(formattedDate).toBe(expectedFormattedDate);
  });
});
