import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../theme/colors';
import spacing from '../theme/spacing';

const AppHeader = ({
  title,
  subtitle,
  onLeftPress,
  leftIcon,
  onRightPress,
  rightIcon,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {leftIcon && (
          <TouchableOpacity style={styles.iconButton} onPress={onLeftPress}>
            <Text style={styles.icon}>{leftIcon}</Text>
          </TouchableOpacity>
        )}

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>

        {rightIcon && (
          <TouchableOpacity style={styles.iconButton} onPress={onRightPress}>
            <Text style={styles.icon}>{rightIcon}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.md,
    paddingHorizontal: spacing.md,
    elevation: 4,
    shadowColor: colors.black,
    shadowOpacity: 0.15,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: spacing.md,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    color: colors.primaryLight,
    marginTop: spacing.xs,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryLight,
  },
  icon: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: '600',
  },
});

export default AppHeader;
